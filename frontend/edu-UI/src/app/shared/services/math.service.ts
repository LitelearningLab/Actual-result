import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import katex from 'katex';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  constructor(private sanitizer: DomSanitizer) {}

  public escapeHtml(text: string): string {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  public isMathSubject(subject?: string): boolean {
    if (!subject) return true;
    const s = subject.toLowerCase().trim();
    const nonMathKeywords = [
      'science', 'physics', 'chemistry', 'biology', 'botany', 'zoology',
      'english', 'history', 'geography', 'social', 'hindi', 'tamil', 'computer'
    ];
    for (const nmk of nonMathKeywords) {
      if (s.includes(nmk) && !s.includes('math')) {
        return false;
      }
    }
    const mathKeywords = [
      'math', 'algebra', 'geometry', 'calculus', 'trigonometry', 'trig', 'arithmetic', 'statistics'
    ];
    return mathKeywords.some((k) => s.includes(k));
  }

  public render(input: string | null | undefined, subject?: string): string {
    if (input == null) return '';
    let str = String(input);
    if (!str.trim()) return '';

    if (!this.hasMathIndicators(str)) {
      if (this.isMathSubject(subject)) {
        str = this.formatPlainMathToLatex(str, subject);
      }
      if (!this.hasMathIndicators(str)) {
        return this.escapeHtml(str).replace(/\r?\n/g, '<br/>');
      }
    }

    return this.parseAndRenderMixed(str);
  }

  public formatPlainMathToLatex(text: string, subject?: string): string {
    if (!text || typeof text !== 'string') return text || '';
    if (!this.isMathSubject(subject)) return text;
    if (text.includes('$$')) return text;

    const lines = text.split(/\r?\n/);
    const prefixRe = /^(\s*(?:\d+[\)\.]|Sol(?:ution)?\s*[:\.\-]?|Ans(?:wer)?\s*[:\.\-]?|Given\s*[:\.\-]?|Step\s*\d+\s*[:\.\-]?)\s*)/i;

    const formattedLines: string[] = [];

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) {
        formattedLines.push('');
        continue;
      }

      let prefix = '';
      let mathPart = trimmed;
      const mPrefix = trimmed.match(prefixRe);
      if (mPrefix) {
        prefix = mPrefix[1].trim();
        mathPart = trimmed.substring(mPrefix[1].length).trim();
      }

      if (mathPart.startsWith('$$') && mathPart.endsWith('$$')) {
        if (prefix) formattedLines.push(prefix);
        formattedLines.push(mathPart);
        continue;
      }

      if (mathPart.startsWith('$') && mathPart.endsWith('$')) {
        mathPart = mathPart.substring(1, mathPart.length - 1).trim();
      }

      const hasMathTokens =
        /[=><\+\-\*/\^]/.test(mathPart) ||
        /\b\d+\/\d+\b/.test(mathPart) ||
        mathPart.includes('\\frac');
      const longWords = mathPart.match(/\b[a-zA-Z]{4,}\b/g) || [];
      const isDescriptiveText = longWords.length >= 4 && !mathPart.includes('=');

      if (!hasMathTokens || isDescriptiveText || !mathPart) {
        formattedLines.push(trimmed);
        continue;
      }

      let s = mathPart;

      // 1. Balanced parenthesized fractions: (...)/(...) or (...)/term
      const slashPattern = /\)\s*\//;
      while (true) {
        const m = slashPattern.exec(s);
        if (!m) break;
        const closeParenIdx = m.index;
        const slashIdx = closeParenIdx + m[0].length - 1;
        let depth = 0;
        let openParenIdx = -1;
        for (let i = closeParenIdx; i >= 0; i--) {
          if (s[i] === ')') depth++;
          else if (s[i] === '(') {
            depth--;
            if (depth === 0) {
              openParenIdx = i;
              break;
            }
          }
        }
        if (openParenIdx === -1) break;

        const numContent = s.substring(openParenIdx + 1, closeParenIdx);
        const afterSlash = s.substring(slashIdx + 1).replace(/^\s+/, '');
        const wsLen = s.substring(slashIdx + 1).length - afterSlash.length;

        if (afterSlash.startsWith('(')) {
          let dDepth = 0;
          let dEnd = -1;
          for (let j = 0; j < afterSlash.length; j++) {
            if (afterSlash[j] === '(') dDepth++;
            else if (afterSlash[j] === ')') {
              dDepth--;
              if (dDepth === 0) {
                dEnd = j;
                break;
              }
            }
          }
          if (dEnd !== -1) {
            const denomContent = afterSlash.substring(1, dEnd);
            const endDenomIdx = slashIdx + 1 + wsLen + dEnd + 1;
            const frac = `\\frac{${numContent}}{${denomContent}}`;
            s = s.substring(0, openParenIdx) + frac + s.substring(endDenomIdx);
            continue;
          }
        }

        const mDenom = afterSlash.match(/^(-?\d+[a-zA-Z]*|-?[a-zA-Z]+)/);
        if (mDenom) {
          const denomContent = mDenom[1];
          const endDenomIdx = slashIdx + 1 + wsLen + denomContent.length;
          const frac = `\\frac{${numContent}}{${denomContent}}`;
          s = s.substring(0, openParenIdx) + frac + s.substring(endDenomIdx);
          continue;
        }
        break;
      }

      // 2. Term / parenthesized denominator: term / (...)
      s = s.replace(/(-?\d+[a-zA-Z]*|-?[a-zA-Z]+)\s*\/\s*\(([^()]+)\)/g, '\\frac{$1}{$2}');

      // 3. Simple fractions: 4/3, 2/3, 54y/7, -210/242, 16x/3
      s = s.replace(/(^|[^a-zA-Z0-9_/\\])(-?\d+[a-zA-Z]*|-?[a-zA-Z]+)\s*\/\s*(\d+[a-zA-Z]*|[a-zA-Z]+)(?![a-zA-Z0-9_/])/g, '$1\\frac{$2}{$3}');

      // 4. Clean negative signs before \frac
      s = s.replace(/\\frac{-(\d+[a-zA-Z]*)/g, '-\\frac{$1');

      // 5. Multiplication * -> \times
      s = s.replace(/\s*\*\s*/g, ' \\times ');

      // 6. Spacing around =
      s = s.replace(/\s*=\s*/g, ' = ');

      if (prefix) {
        formattedLines.push(prefix);
      }
      formattedLines.push(`$$\\displaystyle ${s.trim()}$$`);
    }

    return formattedLines.join('\n\n');
  }

  public renderSafe(input: string | null | undefined, subject?: string): SafeHtml {
    const rendered = this.render(input, subject);
    return this.sanitizer.bypassSecurityTrustHtml(rendered);
  }

  private hasMathIndicators(text: string): boolean {
    return (
      text.includes('$') ||
      text.includes('\\') ||
      text.includes('{') ||
      text.includes('^') ||
      text.includes('_')
    );
  }

  private isSeparateLine(text: string, matchIndex: number, matchLength: number): boolean {
    const prevNewline = text.lastIndexOf('\n', matchIndex - 1);
    const textBeforeOnLine =
      prevNewline === -1
        ? text.substring(0, matchIndex)
        : text.substring(prevNewline + 1, matchIndex);

    if (textBeforeOnLine.trim().length > 0) {
      return false;
    }

    const matchEnd = matchIndex + matchLength;
    const nextNewline = text.indexOf('\n', matchEnd);
    const textAfterOnLine =
      nextNewline === -1
        ? text.substring(matchEnd)
        : text.substring(matchEnd, nextNewline);

    if (textAfterOnLine.trim().length > 0) {
      return false;
    }

    return true;
  }

  private parseAndRenderMixed(text: string): string {
    // Priority order:
    // 1. $$ ... $$ (display math or inline if text on same line)
    // 2. \[ ... \] (display math or inline if text on same line)
    // 3. \( ... \) (inline math)
    // 4. $ ... $ (inline math)
    // 5. \begin{env} ... \end{env} (e.g. pmatrix, bmatrix, vmatrix, cases, aligned, etc.)
    // 6. Raw LaTeX command with arguments or scripts: \frac{...}{...}, \sqrt{...}, etc.
    // 7. Standalone LaTeX symbol/command: \alpha, \beta, \pm, \times, etc.
    const mathRegex = /(?:\$\$([\s\S]*?)\$\$)|(?:\\\[([\s\S]*?)\\\])|(?:\\\(([\s\S]*?)\\\))|(?:\$([^\$]+?)\$)|(\\begin\{([a-zA-Z\*]+)\}[\s\S]*?\\end\{\6\})|(\\[a-zA-Z]+(?:\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}|\[[^\[\]]*\]|\^[a-zA-Z0-9]+|_[a-zA-Z0-9]+|\^\{[^{}]*\}|_\{[^{}]*\})+)|(\\[a-zA-Z]+)/g;

    interface ParsedMatch {
      startIndex: number;
      endIndex: number;
      isSeparateLine: boolean;
      displayMode: boolean;
      renderedHtml: string;
    }

    const matches: ParsedMatch[] = [];
    let match: RegExpExecArray | null;

    while ((match = mathRegex.exec(text)) !== null) {
      const startIndex = match.index;
      const rawMatch = match[0];
      const endIndex = startIndex + rawMatch.length;

      let mathContent = '';
      let isExplicitDisplayDelim = false;
      let isEnv = false;
      let isRawCmd = false;

      if (match[1] !== undefined) {
        // $$...$$
        mathContent = match[1];
        isExplicitDisplayDelim = true;
      } else if (match[2] !== undefined) {
        // \[...\]
        mathContent = match[2];
        isExplicitDisplayDelim = true;
      } else if (match[3] !== undefined) {
        // \(...\)
        mathContent = match[3];
      } else if (match[4] !== undefined) {
        // $...$
        mathContent = match[4];
      } else if (match[5] !== undefined) {
        // \begin{env}...\end{env}
        mathContent = match[5];
        isEnv = true;
      } else if (match[7] !== undefined || match[8] !== undefined) {
        // Raw LaTeX command
        mathContent = match[7] || match[8];
        isRawCmd = true;
      }

      // Check if this math match is on its own separate line
      const onSeparateLine = this.isSeparateLine(text, startIndex, rawMatch.length);

      // Display mode is true ONLY when on a separate line AND (explicit display delimiter or standalone environment)
      // When text is on the same line, displayMode MUST be false so equation stays inline beside text!
      const displayMode = onSeparateLine && (isExplicitDisplayDelim || isEnv);

      let renderedHtml = '';
      if (isRawCmd) {
        // Verify raw command with KaTeX
        try {
          renderedHtml = katex.renderToString(mathContent.trim(), {
            displayMode: false,
            throwOnError: true,
            output: 'htmlAndMathml',
          });
        } catch (e) {
          // Not a valid LaTeX command (e.g. \Users, \note), ignore and treat as text
          continue;
        }
      } else {
        renderedHtml = this.renderKaTeX(mathContent, displayMode);
      }

      matches.push({
        startIndex,
        endIndex,
        isSeparateLine: onSeparateLine,
        displayMode,
        renderedHtml,
      });
    }

    if (matches.length === 0) {
      return this.escapeHtml(text).replace(/\r?\n/g, '<br/>');
    }

    let result = '';
    let lastIndex = 0;

    for (let i = 0; i < matches.length; i++) {
      const m = matches[i];
      let textBefore = text.substring(lastIndex, m.startIndex);

      // If the upcoming equation is a block display (displayMode: true),
      // remove ONE trailing newline from textBefore to preserve clean spacing without double blank lines
      if (m.displayMode && textBefore.endsWith('\n')) {
        if (textBefore.endsWith('\r\n')) {
          textBefore = textBefore.substring(0, textBefore.length - 2);
        } else {
          textBefore = textBefore.substring(0, textBefore.length - 1);
        }
      }

      // If the preceding equation was a block display (displayMode: true),
      // remove ONE leading newline from textBefore to preserve clean spacing without double blank lines
      const prevMatch = i > 0 ? matches[i - 1] : null;
      if (prevMatch && prevMatch.displayMode) {
        if (textBefore.startsWith('\r\n')) {
          textBefore = textBefore.substring(2);
        } else if (textBefore.startsWith('\n')) {
          textBefore = textBefore.substring(1);
        }
      }

      if (textBefore) {
        result += this.escapeHtml(textBefore).replace(/\r?\n/g, '<br/>');
      }

      result += m.renderedHtml;
      lastIndex = m.endIndex;
    }

    // Process remaining trailing text
    if (lastIndex < text.length) {
      let remaining = text.substring(lastIndex);
      const lastMatch = matches[matches.length - 1];
      if (lastMatch && lastMatch.displayMode) {
        if (remaining.startsWith('\r\n')) {
          remaining = remaining.substring(2);
        } else if (remaining.startsWith('\n')) {
          remaining = remaining.substring(1);
        }
      }
      if (remaining) {
        result += this.escapeHtml(remaining).replace(/\r?\n/g, '<br/>');
      }
    }

    return result;
  }

  public renderKaTeX(latex: string, displayMode: boolean): string {
    const clean = (latex || '').trim();
    if (!clean) return '';
    try {
      return katex.renderToString(clean, {
        displayMode: displayMode,
        throwOnError: false,
        output: 'htmlAndMathml',
      });
    } catch (e) {
      if (!displayMode) {
        try {
          return katex.renderToString(clean, {
            displayMode: true,
            throwOnError: false,
            output: 'htmlAndMathml',
          });
        } catch (e2) {
          // ignore
        }
      }
      return `<span class="katex-error">${this.escapeHtml(clean)}</span>`;
    }
  }
}

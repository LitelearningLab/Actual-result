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

  public render(input: string | null | undefined): string {
    if (input == null) return '';
    const str = String(input);
    if (!str.trim()) return '';

    if (!this.hasMathIndicators(str)) {
      return this.escapeHtml(str).replace(/\r?\n/g, '<br/>');
    }

    return this.parseAndRenderMixed(str);
  }

  public renderSafe(input: string | null | undefined): SafeHtml {
    const rendered = this.render(input);
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

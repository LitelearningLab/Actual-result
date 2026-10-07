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
      text.includes('\\(') ||
      text.includes('\\[') ||
      text.includes('\\begin{') ||
      /\\[a-zA-Z]+/.test(text)
    );
  }

  private parseAndRenderMixed(text: string): string {
    const mathRegex = /(?:\$\$([\s\S]*?)\$\$)|(?:\\\[([\s\S]*?)\\\])|(?:\\\(([\s\S]*?)\\\))|(?:\$([^\$\r\n]+?)\$)|(\\begin\{(?:pmatrix|bmatrix|vmatrix|Vmatrix|matrix|cases|aligned|align\*?|array|equation\*?|gather\*?)\}[\s\S]*?\\end\{(?:pmatrix|bmatrix|vmatrix|Vmatrix|matrix|cases|aligned|align\*?|array|equation\*?|gather\*?)\})/g;

    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let result = '';

    while ((match = mathRegex.exec(text)) !== null) {
      const textBefore = text.substring(lastIndex, match.index);
      if (textBefore) {
        result += this.renderNonDelimitedSegment(textBefore);
      }

      if (match[1] !== undefined) {
        result += this.renderKaTeX(match[1], true);
      } else if (match[2] !== undefined) {
        result += this.renderKaTeX(match[2], true);
      } else if (match[3] !== undefined) {
        result += this.renderKaTeX(match[3], false);
      } else if (match[4] !== undefined) {
        result += this.renderKaTeX(match[4], false);
      } else if (match[5] !== undefined) {
        result += this.renderKaTeX(match[5], true);
      }

      lastIndex = mathRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      const remaining = text.substring(lastIndex);
      result += this.renderNonDelimitedSegment(remaining);
    }

    return result;
  }

  private renderNonDelimitedSegment(text: string): string {
    const trimmed = text.trim();
    if (trimmed && /^\\[a-zA-Z]+/.test(trimmed)) {
      try {
        const rendered = katex.renderToString(trimmed, {
          displayMode: false,
          throwOnError: true,
        });
        return rendered;
      } catch (e) {
        // Fallback to normal escaped text if not valid LaTeX
      }
    }

    return this.escapeHtml(text).replace(/\r?\n/g, '<br/>');
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
      return `<span class="katex-error">${this.escapeHtml(clean)}</span>`;
    }
  }
}

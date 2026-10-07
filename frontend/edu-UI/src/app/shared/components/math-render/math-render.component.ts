import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtml } from '@angular/platform-browser';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math-render',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="math-rendered-content" [innerHTML]="safeContent"></span>`,
  styles: [
    `
      :host {
        display: inline;
      }
      .math-rendered-content {
        display: inline;
        word-break: break-word;
      }
      :host ::ng-deep .katex-display {
        margin: 0.4rem 0;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 0.2rem 0;
      }
      :host ::ng-deep .katex {
        font-size: 1.05em;
        text-rendering: auto;
      }
      :host ::ng-deep .katex-error {
        color: #ef4444;
      }
    `,
  ],
})
export class MathRenderComponent implements OnChanges {
  @Input() text: any = '';

  safeContent: SafeHtml = '';

  constructor(private mathService: MathService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      this.safeContent = this.mathService.renderSafe(this.text);
    }
  }
}

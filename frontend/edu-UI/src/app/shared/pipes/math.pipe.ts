import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { MathService } from '../services/math.service';

@Pipe({
  name: 'mathRender',
  standalone: true,
})
export class MathRenderPipe implements PipeTransform {
  constructor(private mathService: MathService) {}

  transform(value: string | null | undefined): SafeHtml {
    return this.mathService.renderSafe(value);
  }
}

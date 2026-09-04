import { Pipe, PipeTransform } from '@angular/core';

export type DateFormatPreset = 'date' | 'datetime' | 'time' | 'full' | 'short' | 'monthYear';

@Pipe({
  name: 'localizedDate',
  pure: false
})
export class LocalizedDatePipe implements PipeTransform {

  transform(
    value: string | number | Date | null | undefined,
    format: DateFormatPreset | Intl.DateTimeFormatOptions = 'date'
  ): string {
    if (!value) return '';

    let date: Date;
    if (value instanceof Date) {
      date = value;
    } else if (typeof value === 'number') {
      date = new Date(value);
    } else {
      // Handle string format
      const strVal = String(value).trim();
      if (!strVal) return '';
      date = new Date(strVal);
    }

    if (isNaN(date.getTime())) {
      return '';
    }

    // Retrieve active user locale or default to 'en-IN' (or 'en-US')
    let locale = 'en-IN';
    try {
      const stored = sessionStorage.getItem('locale');
      if (stored && stored.trim()) {
        locale = stored.trim();
      }
    } catch (e) {}

    let options: Intl.DateTimeFormatOptions;

    if (typeof format === 'object' && format !== null) {
      options = format;
    } else {
      switch (format) {
        case 'datetime':
          options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          };
          break;
        case 'time':
          options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          };
          break;
        case 'full':
          options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          };
          break;
        case 'monthYear':
          options = {
            month: 'short',
            year: 'numeric'
          };
          break;
        case 'short':
        case 'date':
        default:
          options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          };
          break;
      }
    }

    try {
      return new Intl.DateTimeFormat(locale, options).format(date);
    } catch (e) {
      // Fallback in case of locale compatibility issue
      return new Intl.DateTimeFormat('en-IN', options).format(date);
    }
  }
}

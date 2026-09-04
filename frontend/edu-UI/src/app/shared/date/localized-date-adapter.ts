import { Platform } from '@angular/cdk/platform';
import { Inject, Injectable, Optional } from '@angular/core';
import { MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';

export const LOCALIZED_DATE_FORMATS = {
  parse: {
    dateInput: 'dateInput',
  },
  display: {
    dateInput: 'dateInput',
    monthYearLabel: 'monthYearLabel',
    dateA11yLabel: 'dateA11yLabel',
    monthYearA11yLabel: 'monthYearA11yLabel',
  },
};

// Backwards-compatibility alias
export const INDIAN_DATE_FORMATS = LOCALIZED_DATE_FORMATS;

@Injectable()
export class LocalizedDateAdapter extends NativeDateAdapter {
  constructor(
    @Optional() @Inject(MAT_DATE_LOCALE) matDateLocale: string,
    platform: Platform
  ) {
    super(matDateLocale, platform);
  }

  override parse(value: unknown): Date | null {
    if (value instanceof Date) {
      return this.isValid(value) ? value : null;
    }

    if (typeof value === 'string') {
      const trimmed = value.trim();
      if (!trimmed) return null;

      const match = trimmed.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
      if (match) {
        let locale = 'en-IN';
        try {
          const stored = sessionStorage.getItem('locale');
          if (stored && stored.trim()) locale = stored.trim();
        } catch (e) {}

        const isUS = locale.toLowerCase().endsWith('-us') || locale.toLowerCase() === 'en-us';
        const day = Number(isUS ? match[2] : match[1]);
        const month = Number(isUS ? match[1] : match[2]) - 1;
        const year = Number(match[3]);
        const parsed = new Date(year, month, day);

        if (
          parsed.getFullYear() === year &&
          parsed.getMonth() === month &&
          parsed.getDate() === day
        ) {
          return parsed;
        }

        return null;
      }
    }

    if (typeof value === 'string') return null;

    const timestamp = typeof value === 'number' ? value : Date.parse(String(value));
    const date = new Date(timestamp);
    return this.isValid(date) ? date : null;
  }

  override format(date: Date, displayFormat: unknown): string {
    if (!this.isValid(date)) {
      throw Error('LocalizedDateAdapter: Cannot format invalid date.');
    }

    let locale = 'en-IN';
    try {
      const stored = sessionStorage.getItem('locale');
      if (stored && stored.trim()) locale = stored.trim();
    } catch (e) {}

    if (displayFormat === 'monthYearLabel') {
      return date.toLocaleDateString(locale, { month: 'short', year: 'numeric' });
    }

    if (displayFormat === 'monthYearA11yLabel') {
      return date.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    if (locale.toLowerCase().endsWith('-us') || locale.toLowerCase() === 'en-us') {
      return `${month}/${day}/${year}`;
    }

    return `${day}/${month}/${year}`;
  }
}

// Backwards-compatibility alias
export const IndianDateAdapter = LocalizedDateAdapter;

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

export function getUserLocale(): string {
  try {
    const storedLocale = sessionStorage.getItem('locale');
    if (storedLocale && storedLocale.trim()) {
      return storedLocale.trim();
    }
    const countryCode = sessionStorage.getItem('country_code');
    if (countryCode && countryCode.trim()) {
      const code = countryCode.trim().toUpperCase();
      const countryLocaleMap: Record<string, string> = {
        US: 'en-US',
        IN: 'en-IN',
        GB: 'en-GB',
        UK: 'en-GB',
        AU: 'en-AU',
        CA: 'en-CA',
        NZ: 'en-NZ',
        SG: 'en-SG',
        AE: 'ar-AE',
        SA: 'ar-SA',
        DE: 'de-DE',
        FR: 'fr-FR',
        ES: 'es-ES',
        IT: 'it-IT',
        JP: 'ja-JP',
        CN: 'zh-CN',
        KR: 'ko-KR',
        BR: 'pt-BR',
        MX: 'es-MX',
        NL: 'nl-NL',
        SE: 'sv-SE',
        NO: 'nb-NO',
        DK: 'da-DK',
        FI: 'fi-FI',
        PL: 'pl-PL',
        RU: 'ru-RU',
        ZA: 'en-ZA',
        PH: 'en-PH',
        MY: 'ms-MY',
        ID: 'id-ID',
        TH: 'th-TH',
        VN: 'vi-VN',
      };
      if (countryLocaleMap[code]) {
        return countryLocaleMap[code];
      }
      return `en-${code}`;
    }
    const countryName = (sessionStorage.getItem('country_name') || '').trim().toLowerCase();
    if (countryName) {
      if (countryName.includes('united states') || countryName === 'usa' || countryName === 'us') return 'en-US';
      if (countryName.includes('india')) return 'en-IN';
      if (countryName.includes('united kingdom') || countryName.includes('britain') || countryName === 'uk') return 'en-GB';
      if (countryName.includes('canada')) return 'en-CA';
      if (countryName.includes('australia')) return 'en-AU';
      if (countryName.includes('germany')) return 'de-DE';
      if (countryName.includes('france')) return 'fr-FR';
      if (countryName.includes('japan')) return 'ja-JP';
      if (countryName.includes('china')) return 'zh-CN';
    }
  } catch (e) {}

  return typeof navigator !== 'undefined' && navigator.language ? navigator.language : 'en-IN';
}

export function getLocaleDateFormat(locale?: string): string {
  const activeLocale = locale || getUserLocale();
  try {
    const sampleDate = new Date(2026, 11, 25); // Dec 25, 2026
    const formatter = new Intl.DateTimeFormat(activeLocale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    const parts = formatter.formatToParts(sampleDate);
    const pattern = parts
      .map((part) => {
        if (part.type === 'day') return 'DD';
        if (part.type === 'month') return 'MM';
        if (part.type === 'year') return 'YYYY';
        return part.value;
      })
      .join('');

    return pattern || 'DD/MM/YYYY';
  } catch (e) {
    return 'DD/MM/YYYY';
  }
}

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

      const locale = getUserLocale();
      const pattern = getLocaleDateFormat(locale);

      const parts = trimmed.split(/\D+/).filter(Boolean);
      if (parts.length === 3) {
        const patternParts = pattern.split(/[^A-Za-z]+/).filter(Boolean);
        const dayIdx = patternParts.findIndex((p) => p.toUpperCase().startsWith('D'));
        const monthIdx = patternParts.findIndex((p) => p.toUpperCase().startsWith('M'));
        const yearIdx = patternParts.findIndex((p) => p.toUpperCase().startsWith('Y'));

        if (dayIdx >= 0 && monthIdx >= 0 && yearIdx >= 0) {
          const day = Number(parts[dayIdx]);
          const month = Number(parts[monthIdx]) - 1;
          let year = Number(parts[yearIdx]);
          if (year < 100) year += 2000;
          const parsed = new Date(year, month, day);

          if (
            parsed.getFullYear() === year &&
            parsed.getMonth() === month &&
            parsed.getDate() === day
          ) {
            return parsed;
          }
        }
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

    const locale = getUserLocale();

    if (displayFormat === 'monthYearLabel') {
      return date.toLocaleDateString(locale, { month: 'short', year: 'numeric' });
    }

    if (displayFormat === 'monthYearA11yLabel') {
      return date.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
    }

    try {
      return new Intl.DateTimeFormat(locale, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).format(date);
    } catch (e) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }
}

// Backwards-compatibility alias
export const IndianDateAdapter = LocalizedDateAdapter;


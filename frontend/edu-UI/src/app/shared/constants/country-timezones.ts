import { getTimeZones, TimeZone } from '@vvo/tzdb';

export interface CountryTimezoneRecord {
  countryName: string;
  countryCode: string; // ISO 3166-1 alpha-2 (e.g., 'IN', 'US', 'GB', 'AU', ...)
  shortName: string;   // Timezone short abbreviation (e.g., 'IST', 'EST', 'CST', 'PST', 'GMT', 'AEST')
  timezone: string;    // IANA Timezone identifier (e.g., 'Asia/Kolkata', 'America/New_York')
  utcOffset: string;   // UTC Offset (e.g., 'UTC+05:30', 'UTC-05:00')
  label: string;       // Formatted label: e.g. 'America/New_York (EST)'
  subLabel?: string;   // Optional description / region / city
  cities?: string[];   // Major cities in this timezone
}

// Dynamically generate all global timezone records using @vvo/tzdb
const tzDbList: TimeZone[] = getTimeZones();

export const COUNTRY_TIMEZONE_RECORDS: CountryTimezoneRecord[] = tzDbList.map((tz) => {
  const shortName = tz.abbreviation || tz.alternativeName || '';
  const label = shortName ? `${tz.name} (${shortName})` : tz.name;
  return {
    countryName: tz.countryName || '',
    countryCode: tz.countryCode ? tz.countryCode.toUpperCase() : '',
    shortName: shortName,
    timezone: tz.name, // IANA timezone identifier
    utcOffset: tz.currentTimeFormat ? `UTC${tz.currentTimeFormat}` : '',
    label: label,
    subLabel: tz.countryName || '',
    cities: tz.mainCities || [],
  };
});

// Pre-indexed map for high-speed lookups by 2-letter uppercase ISO code
export const COUNTRY_TIMEZONE_MAP: Record<string, CountryTimezoneRecord[]> = {};

COUNTRY_TIMEZONE_RECORDS.forEach((rec) => {
  if (!rec.countryCode) return;
  const code = rec.countryCode.toUpperCase();
  if (!COUNTRY_TIMEZONE_MAP[code]) {
    COUNTRY_TIMEZONE_MAP[code] = [];
  }
  COUNTRY_TIMEZONE_MAP[code].push(rec);
});

// Alias UK -> GB
if (COUNTRY_TIMEZONE_MAP['GB'] && !COUNTRY_TIMEZONE_MAP['UK']) {
  COUNTRY_TIMEZONE_MAP['UK'] = COUNTRY_TIMEZONE_MAP['GB'];
}

// Dynamic country name to ISO code lookup from @vvo/tzdb
const COUNTRY_NAME_TO_CODE: Record<string, string> = {};

COUNTRY_TIMEZONE_RECORDS.forEach((rec) => {
  if (rec.countryName && rec.countryCode) {
    COUNTRY_NAME_TO_CODE[rec.countryName.toUpperCase()] = rec.countryCode;
  }
});

// Common alternative aliases
COUNTRY_NAME_TO_CODE['UNITED STATES OF AMERICA'] = 'US';
COUNTRY_NAME_TO_CODE['USA'] = 'US';
COUNTRY_NAME_TO_CODE['UK'] = 'GB';
COUNTRY_NAME_TO_CODE['BRITAIN'] = 'GB';
COUNTRY_NAME_TO_CODE['GREAT BRITAIN'] = 'GB';
COUNTRY_NAME_TO_CODE['UAE'] = 'AE';
COUNTRY_NAME_TO_CODE['DUBAI'] = 'AE';
COUNTRY_NAME_TO_CODE['KOREA'] = 'KR';
COUNTRY_NAME_TO_CODE['SOUTH KOREA'] = 'KR';
COUNTRY_NAME_TO_CODE['RUSSIA'] = 'RU';
COUNTRY_NAME_TO_CODE['CZECH REPUBLIC'] = 'CZ';

/**
 * Normalizes any country input (code, name, or UUID-prefixed string) into a standard 2-letter ISO code.
 */
export function normalizeCountryCode(input: string): string {
  if (!input) return '';
  const trimmed = input.trim().toUpperCase();

  // If already a valid 2-letter code in our map
  if (COUNTRY_TIMEZONE_MAP[trimmed]) return trimmed;

  // Check country name lookup
  if (COUNTRY_NAME_TO_CODE[trimmed]) return COUNTRY_NAME_TO_CODE[trimmed];

  // Check if string contains country names/codes (e.g. 'uuid-us' -> 'US')
  if (trimmed.startsWith('UUID-') || trimmed.includes('-')) {
    const parts = trimmed.split(/[-_]/);
    for (const part of parts) {
      const p = part.trim().toUpperCase();
      if (COUNTRY_TIMEZONE_MAP[p]) return p;
      if (COUNTRY_NAME_TO_CODE[p]) return COUNTRY_NAME_TO_CODE[p];
    }
  }

  // Check partial name match
  for (const [name, code] of Object.entries(COUNTRY_NAME_TO_CODE)) {
    if (trimmed.includes(name) || name.includes(trimmed)) {
      return code;
    }
  }

  return trimmed.length === 2 ? trimmed : '';
}

/**
 * Retrieves the user's country code from localStorage and sessionStorage.
 */
export function getUserCountryCode(): string {
  try {
    const rawStorage = [
      sessionStorage.getItem('country_code'),
      localStorage.getItem('country_code'),
      sessionStorage.getItem('country_id'),
      localStorage.getItem('country_id'),
      sessionStorage.getItem('country_name'),
      localStorage.getItem('country_name'),
    ];

    for (const val of rawStorage) {
      if (val && val.trim()) {
        const normalized = normalizeCountryCode(val.trim());
        if (normalized && COUNTRY_TIMEZONE_MAP[normalized]) {
          return normalized;
        }
      }
    }

    // Try parsing user / user_profile objects
    const userJsonStrings = [
      sessionStorage.getItem('user_profile'),
      localStorage.getItem('user_profile'),
      sessionStorage.getItem('user'),
      localStorage.getItem('user'),
    ];

    for (const raw of userJsonStrings) {
      if (raw) {
        try {
          const u = JSON.parse(raw);
          const candidate =
            u?.country_code ||
            u?.countryCode ||
            u?.country_id ||
            u?.countryId ||
            u?.country_name ||
            u?.countryName ||
            u?.country?.country_code ||
            u?.country?.country_id ||
            u?.country?.country_name ||
            u?.country?.name ||
            (typeof u?.country === 'string' ? u?.country : '');

          if (candidate) {
            const normalized = normalizeCountryCode(String(candidate));
            if (normalized && COUNTRY_TIMEZONE_MAP[normalized]) {
              return normalized;
            }
          }
        } catch (e) {}
      }
    }
  } catch (e) {}

  return 'IN'; // Safe default
}

/**
 * Returns all IANA timezones corresponding to the given country code or name.
 */
export function getTimezonesForCountry(codeOrName: string): CountryTimezoneRecord[] {
  const code = normalizeCountryCode(codeOrName);
  if (code && COUNTRY_TIMEZONE_MAP[code]) {
    return COUNTRY_TIMEZONE_MAP[code];
  }
  return [];
}

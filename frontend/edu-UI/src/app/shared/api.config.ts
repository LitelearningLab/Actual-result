const hostname = window.location.hostname;

// Detect local environment (localhost, 127.0.0.1, or local Wi-Fi/LAN IP address)
const frontendIsLocal =
  hostname === 'localhost' ||
  hostname === '127.0.0.1' ||
  hostname.startsWith('192.168.') ||
  hostname.startsWith('10.') ||
  hostname.startsWith('172.');

const LOCAL_API_BASE = `http://${hostname}:5001/edu/api`;
const LIVE_API_BASE = 'http://34.100.213.250:5001/edu/api';

// Change only this value while developing:
// true  = frontend uses the local backend
// false = frontend uses the live backend
const USE_LOCAL_BACKEND = true;

export const API_BASE = frontendIsLocal && USE_LOCAL_BACKEND ? LOCAL_API_BASE : LIVE_API_BASE;


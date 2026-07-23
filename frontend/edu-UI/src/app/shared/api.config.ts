const LOCAL_API_BASE = 'http://127.0.0.1:5001/edu/api';
const LIVE_API_BASE = 'http://34.100.213.250:5001/edu/api';

// Change only this value while developing:
// true  = localhost frontend uses the local backend
// false = localhost frontend uses the live backend
const USE_LOCAL_BACKEND = true;

const frontendIsLocal =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';

// The deployed frontend always uses the live backend. The switch above only
// affects a frontend opened from localhost.
export const API_BASE = frontendIsLocal && USE_LOCAL_BACKEND
  ? LOCAL_API_BASE
  : LIVE_API_BASE;

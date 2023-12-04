export const API_URL = import.meta.env.VITE_APP_AJAX_URL.replace(
  "{protocol}",
  location.protocol,
).replace("{host}", location.host);

export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

export function getOriginalPrice(finalPrice, discountPercent) {
  return finalPrice / (1 - discountPercent / 100);
}

export function formatDateNow(
  date = new Date(),
  locale = "en-US",
  options = { year: "numeric", month: "2-digit", day: "2-digit" }
) {
  return new Intl.DateTimeFormat(locale, options).format(date);
}

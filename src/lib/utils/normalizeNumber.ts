const NON_ENGLISH_DIGITS = [
  { num: 0, digits: ["٠", "۰"] },
  { num: 1, digits: ["١", "۱"] },
  { num: 2, digits: ["٢", "۲"] },
  { num: 3, digits: ["٣", "۳"] },
  { num: 4, digits: ["٤", "۴"] },
  { num: 5, digits: ["٥", "۵"] },
  { num: 6, digits: ["٦", "۶"] },
  { num: 7, digits: ["٧", "۷"] },
  { num: 8, digits: ["٨", "۸"] },
  { num: 9, digits: ["٩", "۹"] },
];

export default function normalizeNumber(value: string) {
  const chars = value.split("");

  for (let i = 0; i < chars.length; i++) {
    for (const { num, digits } of NON_ENGLISH_DIGITS) {
      let isFound = false;

      for (const digit of digits) {
        if (digit === chars[i]) {
          chars[i] = String(num);
          isFound = true;
          break;
        }
      }

      if (isFound) {
        break;
      }
    }
  }

  return +chars.join("");
}

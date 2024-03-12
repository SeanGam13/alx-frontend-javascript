export default function cleanSet(set, startString) {
  const stringsArray = [];
  if (!startString || typeof startString !== 'string') return '';
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      stringsArray.push(item);
    }
  }
  return stringsArray.map((str) => str.slice(startString.length)).join('-');
}

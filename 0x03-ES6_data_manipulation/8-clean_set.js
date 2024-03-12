export default function cleanSet(set, startString) {
  if (!startString) {
    startString = '';
  }

  if (startString.length === 0) {
    return '';
  }

  if (!(set instanceof Set)) {
    throw new Error('Input must be a Set instance');
  }

  const output = [];

  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      output.push(item.slice(startString.length));
    }
  }

  return output.join('-');
}

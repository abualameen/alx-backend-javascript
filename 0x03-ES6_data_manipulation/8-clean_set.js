export default function cleanSet(set, startString) {
  // if (!startString) {
  // startString = '';
  // }

  if (startString.length === 0) {
    return '';
  }

  if (!(set instanceof Set)) {
    throw new Error('Input must be a Set instance');
  }

  const output = [];

  for (const things of set) {
    if (typeof things === 'string' && things.startsWith(startString)) {
      output.push(things.slice(startString.length));
    }
  }

  return output.join('-');
}

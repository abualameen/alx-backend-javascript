export default function cleanSet(set, startString) {
  let newStartString = startString;

  if (!newStartString) {
    newStartString = '';
  }

  if (newStartString.length === 0) {
    return '';
  }

  if (!(set instanceof Set)) {
    throw new Error('Input must be a Set instance');
  }

  const output = [];

  for (const things of set) {
    if (typeof things === 'string' && things.startsWith(newStartString)) {
      output.push(things.slice(newStartString.length));
    }
  }

  return output.join('-');
}

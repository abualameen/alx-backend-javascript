export default function hasValuesFromArra(set, arr) {
  for (const things of arr) {
    if (!set.has(things)) {
      return false;
    }
  }
  return true;
}

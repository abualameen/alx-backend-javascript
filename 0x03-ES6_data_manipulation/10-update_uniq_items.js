export default function updateUniqueItems(groMap) {
  if (!(groMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of groMap.entries()) {
    if (quantity === 1) {
      groMap.set(item, 100);
    }
  }
}

const weakMap = new WeakMap();

export { weakMap };

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const counter = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, counter);
    if (counter >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}

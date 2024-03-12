export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Posotion outside range');
  }
  if (!Number.isInteger(length) || length < 0) {
    throw new Error('length must be an interger and positive.');
  }
  if (!Number.isInteger(position)) {
    throw new Error('Postion must be an interger.');
  }
  if (!Number.isInteger(value)) {
    throw new Error('Value must be an integer.');
  }
  if (value < -128 || value > 127) {
    throw new Error('Value must be within the range of an Int8 value (-128 to 127).');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);

  return view;
}

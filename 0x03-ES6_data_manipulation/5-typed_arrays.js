function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) throw new Error('Position outside range');

  // setting length of new ArrayBuffer
  const buffer = new ArrayBuffer(length);

  // setting Int8Array view on buffer
  const int8Array = new Int8Array(buffer);

  int8Array[position] = value;

  // second method
  // const dv1 = new DataView(buffer);

  // dv1.setInt8(position, value);

  return buffer;
}

export default createInt8TypedArray;

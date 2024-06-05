export default function createInt8TypedArray(length, position, value) {

    const buffer = new ArrayBuffer(length); // the genearic and the base buffer
    const int8buffer = new Int8Array(buffer); // specific type of typed arrays 8 byte
    if (position > int8buffer.length)
        throw new Error('Position outside range');
    int8buffer[position] = value; // just change value of position
    return new DataView(buffer); // return dataview buffer
    }
export default function createInt8TypedArray(length, position, value) {

    const buffer = new ArrayBuffer(length); 
    const int8buffer = new Int8Array(buffer)
    if (position > int8buffer.length)
        throw new Error('Position outside range')
    int8buffer[position] = value
    return new DataView(buffer)
    }
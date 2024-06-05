export default function createInt8TypedArray(length, position, value) {

    let myArr = new ArrayBuffer(length); 
    let data = new DataView(myArr);
    return data
    }
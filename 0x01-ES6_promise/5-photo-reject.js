export default function uploadPhoto(filename) {
    const newPromise = new Promise((resolve, reject)=> {
        if (1) {
            reject(new Error(`${filename} cannot be processed`))
        }
    })
    return newPromise;

}
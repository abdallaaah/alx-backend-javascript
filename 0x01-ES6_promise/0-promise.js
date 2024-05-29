export default function getResponseFromAPI() {
    const newPromise = new Promise((resolve, reject) => {
        if (1) {
            resolve('yes i am done');
        } else {
            reject('it is a problem');
        }
    });
    return newPromise;
}

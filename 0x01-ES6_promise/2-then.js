export default function handleResponseFromAPI(promise) {
    return promise.then(() => {
        console.log('Got a response from the API')
        const object = {
            status: 200,
            body: succuess
        }
        return object;
    }).catch(() => {
       return new Error()
    });
}

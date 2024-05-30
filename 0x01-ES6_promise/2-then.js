export default function handleResponseFromAPI(promise) {
    return promise.then((response) => {
        console.log('Got a response from the API')
        const object = {
            status: 200,
            body: succuess
        }
        return object;
    }).catch((error) => {
       return new Error()
    });
}

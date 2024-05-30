export default function getFullResponseFromAPI(success) {
    const newPromise = new Promise((resolve, reject) => {
        if(success){
            const back = {
                status: 200,
                body: 'success'
            }
            resolve(back)
        } else {
            reject('The fake API is not working currently')
        }
    })
    return newPromise;

}
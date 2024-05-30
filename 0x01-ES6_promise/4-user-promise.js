export default function signUpUser(firstName, lastName) {
    const newPromise = new Promise((resolve, reject)=> {
        if (1) {
            resolve({firstName: firstName, lastName: lastName})
        }
    })
    return newPromise;
}

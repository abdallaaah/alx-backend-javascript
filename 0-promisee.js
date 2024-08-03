function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        let x = 0; // This is just an example condition
        if (x === 0) {
            resolve("aaaaaaa");
        } else {
            reject("funckk");
        }
    });
}

export default getResponseFromAPI;

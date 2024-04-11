function mainFunction() {
    return new Promise((resolve, reject) => {
        const a = 0
        if (a) {
            try {
                resolve();
            }
            catch (error) {
                console.log("caught error in resolve")
            }
        }
        else {
            try{
              reject();
            }
            catch(error){
                console.log("in reject error")
            }
        }
    })
}

mainFunction().then(() => {
    console.log("resolve")
}).catch(() => {
    console.log("in reject");
})
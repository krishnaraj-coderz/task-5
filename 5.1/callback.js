function mainFunction(callbackFunction) {
    console.log("from main Function");
    let a;
        setTimeout(function () {
            a = "UniqueCode"
            callbackFunction(a);
        }, 2000)
}

mainFunction((code) => {
    console.log(code)
})
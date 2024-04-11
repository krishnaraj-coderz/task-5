function wordReturner() {
    return new Promise((resolve) => {
        setTimeout(function () {
             resolve("word")
        }, 2000)
    })
}

async function printWord() {
    let word = await wordReturner()
    console.log(word)
}

printWord()

console.log("hello")
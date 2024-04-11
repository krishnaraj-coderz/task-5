const PageFunction = {
    frontendContent: (req, res) => {
        res.end("this is front end page")
    },
    backendContent: (req, res) => {
        res.end("this is back end page")
    },
    fullStackContent: (req, res) => {
        res.end("this is fullstack page")
    }
}

module.exports = PageFunction;
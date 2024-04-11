const PageFunction = {
    homeContent: (req, res) => {
        console.log("home page called");
        res.status(200).send(`<h2>this is home page</h2>`);
    },
    contactContent: (req, res) => {
        console.log("contact page called");
        res.status(200).send(`<h2>this is contact page ${req.params.number}</h2>`);
    },
    aboutContent: (req, res) => {
        console.log("about page called");
        res.status(200).send(`<h2>this is about page</h2>`);
    },
    frontendContent: (req, res) => {
        console.log("front end page called")
        res.status(200).end("this is front end page")
    },
    backendContent: (req, res) => {
        res.status(200).end("this is back end page")
    },
    fullStackContent: (req, res) => {
        res.end("this is fullstack page")
    },
    dataContent: (req, res) => {
        console.log("called data page");
        console.log(req.body);
        res.status(201);
        res.end("This is data page");
    },
    UsersContent: (req, res) => {
        console.log("user content called");
        const {id,name,age} = req.query;
        res.status(200).json({id, name, age});
    }    
}

module.exports = PageFunction;
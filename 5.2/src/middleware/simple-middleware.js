simpleMiddleware = {
    checkUrl: (req, res, next) => {
        if (req.url.includes("")) {
            console.log("this is the first middleware")
            next()
        }
    },
    checkContact:(req,res,next)=>{
        if(req.params.number.length==10){
            console.log("valid contact page")
            next()
        }
        else{
            console.log("wrong way of accessng contact page")
        }
    }
}
module.exports = simpleMiddleware
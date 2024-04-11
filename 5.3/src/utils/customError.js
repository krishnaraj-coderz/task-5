class customError extends Error{
    constructor(message,statusCode){
        super()
        this.statusCode = statusCode;
        this.message = message;
        this.status = statusCode>=400 && statusCode<500? "fail": "error";
        this.operational = true;
        Error.captureStackTrace(this,this.constructor)
    }
}

module.exports = customError;
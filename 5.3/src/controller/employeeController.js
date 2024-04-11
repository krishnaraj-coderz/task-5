const empService = require("../dbServices/employeeService");
const customError = require("../utils/customError");
const asyncErrorHandler = require("./errorController")
const bcrypt = require("bcrypt");
require("dotenv").config()

const signUpEmployee = asyncErrorHandler(async (req, res) => {
    let hashedPassword = await bcrypt.hash(req.body.password, parseInt(process.env.salting_value))
    const employee = await empService.InsertEmployeeService(req.body, hashedPassword);  
    res.status(201).json(employee);
})

const showAllEmployee = asyncErrorHandler(async (req, res) => {
    const employee = await empService.showAllEmployeeService();
    res.status(200).json(employee);
})

const loginEmployee = asyncErrorHandler(async(req, res) => {
    let employee;
    employee = await empService.findEmployeeByUserName(req.body.userMailName);
    employee = employee?employee:await empService.findEmployeeByEmail(req.body.userMailName);
    if (employee === null) {
        throw new customError("not a valid user",400)
    }
    else {
        const isPasswordMatched = await bcrypt.compare(req.body.password, employee.hashedPassword)
        if ((req.body.userMailName === employee.userName || req.body.userMailName === employee.email) 
        && isPasswordMatched) {
            const jwt = require("jsonwebtoken")
            const generatedToken = jwt.sign({UserMailName:req.body.userMailName},process.env.jwt_secret_key,{
                // expiresIn: '5h' //expiration after 5 hour but not now
            })
            res.status(200).json({
                "message": "successfully Logged In",
                "token":generatedToken
            })
        }
        else {
            throw new customError("Password Doesn't match",400)
        }
    }
})

const changePassword = asyncErrorHandler(async(req, res) => {
    let employee = await empService.findEmployeeByEmail(req.body.email)
    const isPasswordValid = await bcrypt.compare(req.body.oldPassword, employee.hashedPassword)
//check this
    const hashedPassword = await bcrypt.hash(req.body.newPassword,parseInt(process.env.salting_value));
    if (isPasswordValid) {
        await empService.updateUserPassword(req.body.newPassword, hashedPassword, req.body.email);
        employee = await empService.findEmployeeByEmail(req.body.email)
        res.status(200).json(employee);
    }
    else {
        throw new customError("problem in changing password",500)
    }
})

//in body
const customRecords = asyncErrorHandler(async (req,res)=>{
    const totalRecordCount = await empService.showAllEmployeeService();
    const data={}
    data.start = req.body.start ? parseInt(req.body.start) : 0;
    data.limit = req.body.limit ? parseInt(req.body.limit) : totalRecordCount.length;
    data.searchTerm = req.body.search ? req.body.search : "";
    data.sortBy = req.body.sortBy ? req.body.sortBy : "id";
    data.sortOrder = req.body.sortOrder ? req.body.sortOrder.toUpperCase() : "ASC";
    data.filterBy = [];
    data.filterTerm = [];
    for (filterPropery in req.body.filters){
        data.filterBy.push(filterPropery)
        data.filterTerm.push(req.body.filters[filterPropery])
    }
    if (parseInt(data.start) + parseInt(data.limit) <= totalRecordCount.length) {
        const fetchedRecord = await empService.fetchSubsetRecords(data)
        res.status(200).json(fetchedRecord);
    }
    else {
        throw new customError("start or limit is out of range",400)
    }
})


//extra's

//in query param
const dynamicPaginateRecords = asyncErrorHandler(async (req, res) => {
    const totalRecordCount = await empService.showAllEmployeeService();
    const start = req.query.start ? parseInt(req.query.start) : 0;
    const limit = req.query.limit ? parseInt(req.query.limit) : totalRecordCount.length;
    const searchTerm = req.query.search ? req.query.search : "";
    const sortBy = req.query.sortBy ? req.query.sortBy : "id";
    const sortOrder = req.query.sortOrder ? req.query.sortOrder.toUpperCase() : "ASC";
    const filterBy = [];
    const filterTerm = [];
    for (param in req.query){
        param.includes("filterBy")? filterBy.push(req.query[param]):""
        param.includes("filterTerm")? filterTerm.push(req.query[param] ):""
    }
    if (start + limit <= totalRecordCount.length) {
        const fetchedRecord = await empService.fetchSubsetRecords({
            start,
            limit, 
            searchTerm, 
            sortBy, 
            sortOrder,
            filterBy,
            filterTerm 
        })
        res.status(200).json(fetchedRecord);
    }
    else {
        throw new customError( "start or limit is out of range",400)
    }
})

// Different pagination logic()
const paginateRecords = asyncErrorHandler(async (req, res) => {
    const totalRecordCount = await empService.showAllEmployeeService();
    let currentCount = 0;
    let paginatedRecords = [];
    while (currentCount < totalRecordCount.length) {
        const fetchedRecord = await empService.fetchSubsetRecords({
            start:currentCount, 
            limit:2,
            searchTerm:"",
            sortBy:"id",
            sortOrder:"ASC",
            filterBy:[],
            filterTerm:[]
        })
        paginatedRecords.push({
            page: (currentCount / 2) + 1,
            data: fetchedRecord
        })
        currentCount += 2
    }
    res.json(paginatedRecords);   
})

// seperate search api
const searchEmployeeRecords = asyncErrorHandler(async (req, res) => {
    const employee = await empService.searchEmployeeByTerm(req.params.searchTerm);
    res.status(200).json(employee)
})

module.exports = {signUpEmployee,showAllEmployee,loginEmployee,changePassword, 
    paginateRecords,dynamicPaginateRecords, searchEmployeeRecords,customRecords}



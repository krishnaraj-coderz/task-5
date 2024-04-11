const db = require('../../config/indexModel');
const { Op } = require("sequelize");
const customError = require('../utils/customError');
const employeeModel = db.employee;

async function InsertEmployeeService(data, hashedPassword) {
    const employee = await employeeModel.create({
        userName: data.userName,
        email: data.email,
        password: data.password,
        hashedPassword: hashedPassword,
        mobileNumber: data.mobileNumber
    })
    return employee;
}

async function showAllEmployeeService() {
    const employee = await employeeModel.findAll({});
    return employee;
}

async function findEmployeeByUserName(userName) {
    try {
        const employee = await employeeModel.findOne({ where: { userName: userName } })
        return employee;
    }
    catch (error) {
        throw new customError("Problem in getting user by Username", 400);
    }
}

async function findEmployeeByEmail(email) {
    try {
        const employee = await employeeModel.findOne({ where: { email: email } })
        return employee;
    }
    catch (error) {
        throw new customError("problem in getting user by email",400);
    }
}

async function updateUserPassword(password, hashedPassword, email) {
    try {
        const employee = await employeeModel.update({
            password: password,
            hashedPassword: hashedPassword,
        }, {
            where: {
                email: email
            }
        })
    }
    catch (error) {
        throw new customError("problem in updating the user",400);
    }
}

async function fetchSubsetRecords( {start, limit, searchTerm, sortBy, sortOrder, filterBy, filterTerm }){
    const filterConditions = []
    for (let i = 0; i < filterBy.length; i++) {
        if (!isNaN(new Date(filterTerm[i])) && isNaN(filterTerm[i]) ){
            filterConditions.push({
                [filterBy[i]]: {
                    [Op.between]: [
                        new Date(`${filterTerm[i]}T00:00:00.000Z`),
                        new Date(`${filterTerm[i]}T23:59:59.000Z`)
                    ]
                }
            })
            break;
        }
        filterConditions.push({ [filterBy[i]]: { [Op.like]: `%${filterTerm[i]}%` } })
    }
    const employee = await employeeModel.findAll({
        where: {
            [Op.and]: [
                ...filterConditions,
                [{
                    [Op.or]: [{ userName: { [Op.like]: `%${searchTerm}%` } },
                    { email: { [Op.like]: `%${searchTerm}%` } }]
                }],
            ]
        },
        offset: start,
        limit: limit,
        order: [[sortBy, sortOrder]]
    })
    return employee

}

async function searchEmployeeByTerm(searchTerm){
    const employee = await employeeModel.findAll({
        where: {
            [Op.or]:
                [
                    { userName: { [Op.like]: `%${searchTerm}%` } },
                    { email: { [Op.like]: `%${searchTerm}%` } },
                ]
        }
    })
    return employee;
}

module.exports = {
    InsertEmployeeService, showAllEmployeeService, findEmployeeByUserName,
    findEmployeeByEmail, updateUserPassword, fetchSubsetRecords,
    searchEmployeeByTerm
}
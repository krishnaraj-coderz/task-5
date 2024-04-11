const db = require('../../config/indexModel');
const { Op } = require("sequelize")
const reviewModel = db.performanceReview;

const addReview = async (data)=>{
    const employeeReview = await reviewModel.create({
        reviewDate:data.reviewDate,
        reviewer:data.reviewer,
        reviewScore:data.reviewScore,
        employeeId:data.employeeId
    })
    return employeeReview;
}

const getAllEmployeeWithReviews = async ()=>{
    console.log("in db services review")
    const employeeReview = reviewModel.findAll({
        include:[db.employee]
    })
    return employeeReview
}

module.exports = {addReview,getAllEmployeeWithReviews}
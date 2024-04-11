const {addReview,getAllEmployeeWithReviews} = require("../dbServices/employeeReviewService");


const addEmployeeReview = async (req,res)=>{
    try{
        data = {
            reviewDate:req.body.reviewDate,
            reviewer:req.body.reviewer,
            reviewScore:req.body.reviewScore,
            employeeId:req.body.employeeId
        }
        const employeeReview = await addReview(data);
        res.status(200).json(employeeReview)
    }
    catch(error){
        res.status(500).json({
            message:"problem in adding the employee review"
        })
    }
}

const getAllEmployeeReviews = async(req,res)=>{
    try{
        const employeeReview = await getAllEmployeeWithReviews();
        res.status(200).json(employeeReview)
    }
    catch(error){
        res.status(500).json({
            message:"problem in getting the employee review"
        })
    }
}

module.exports = {addEmployeeReview,getAllEmployeeReviews}
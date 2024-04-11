const db = require("../model/")
const productModel = db.product;
const addProductService = async (productName,actualPrice,offerPrice,offerStartDate,offerEndDate)=>{
    try{
        const product = await productModel.create({
            productName,
            actualPrice,
            offerPrice,
            offerStartDate,
            offerEndDate
        })
    return product;
    }
    catch(error){
       throw new Error ("error in adding product to services")
    }
}

const getAllProducts = async()=>{
    const product = await productModel.findAll({});
    return product;
}

module.exports = {addProductService,getAllProducts}
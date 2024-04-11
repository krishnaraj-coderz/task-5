const {addProductService,getAllProducts} = require("../dbservice/productService")

const addNewProduct = async (req,res)=>{
    try{
        let currentPrice;
        const product = await addProductService(
            req.body.productName,
            req.body.actualPrice,
            req.body.offerPrice,
            req.body.offerStartDate,
            req.body.offerEndDate
        )
        res.status(200).json(product);
    }
    catch(error){
        res.status(400).json({message:"problem in adding the user"})
    }
}

const getAllProductsWithCurrent = async(req,res)=>{
    const products  = await getAllProducts();
    res.json(products)
}

module.exports = {addNewProduct,getAllProductsWithCurrent}
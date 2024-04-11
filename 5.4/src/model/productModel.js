module.exports = (sequelize,DataTypes)=>{
    const product = sequelize.define("product",{
        productName:{
            allowNull:false,
            unique:true,
            type:DataTypes.STRING
        },
        actualPrice:{
            allowNull:false,
            type:DataTypes.DECIMAL(12,2)
        },
        offerPrice:{
            allowNull:false,
            type:DataTypes.DECIMAL(12,2)
        },
        offerStartDate:{
            type:DataTypes.DATEONLY
        },
        offerEndDate:{
            type:DataTypes.DATEONLY
        },
        currentPrice:{
            type:DataTypes.VIRTUAL,
            get(){
                if(new Date()>= new Date(this.offerStartDate)&& new Date()<= new Date(this.offerEndDate)){
                    return this.offerPrice;
                }
                else{
                  return this.actualPrice;
                }
            }
        }
    })
    return product
}


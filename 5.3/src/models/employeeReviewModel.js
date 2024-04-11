module.exports = (sequelize,DataTypes)=>{
    const performanceReview = sequelize.define("performancereview",{
        reviewId:{
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.INTEGER
        },
        reviewDate:{
            type:DataTypes.DATEONLY,
            notNull:true
        },
        reviewer:{
            type:DataTypes.STRING,
            notNull:true
        },
        reviewScore:{
            type:DataTypes.INTEGER
        },
        employeeId:{
            type:DataTypes.INTEGER
        }
    })
    return performanceReview
}
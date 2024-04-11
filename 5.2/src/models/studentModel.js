module.exports = (sequelize,DataTypes)=>{
    const product = sequelize.define("student",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        department:{
            type:DataTypes.STRING,
            allowNull:false
        },
        mark:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        passed:{
            type:DataTypes.BOOLEAN
        }
    });
    return product;
}
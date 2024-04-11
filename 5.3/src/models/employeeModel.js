module.exports = (sequelize,DataTypes)=>{
    const employee = sequelize.define("employee",{
        userName:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        // also including plain password for reference in this practice task
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        hashedPassword:{
            type:DataTypes.STRING,
            allowNull:false
        },
        mobileNumber:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    })
    return employee
}
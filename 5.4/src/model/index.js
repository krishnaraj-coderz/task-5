const {Sequelize, DataTypes} = require("sequelize");
const dbConfig = require("../../config/dbConfig")
const sequelize = new Sequelize(
    database = dbConfig.database,
    userName = dbConfig.userName,
    password=dbConfig.password,
    {
        host:dbConfig.host,
        dialect:dbConfig.dialect,
        pool:{
            min:dbConfig.pool.min,
            max:dbConfig.pool.max,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle,
        }
    }
)


sequelize.authenticate().then(()=>{
    console.log("authenticated");
}).catch((err)=>{
    console.log(err);
})
    
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
const product = require("./productModel")(sequelize,DataTypes)

db.product = product;
console.log(product);
sequelize.sync({force:false}).then(()=>{
    console.log("synced")
})

module.exports = db;
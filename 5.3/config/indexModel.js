const {Sequelize,DataTypes} = require("sequelize")
const dbconfig = require("./dbconfig");

const sequelize = new Sequelize(
    database = dbconfig.database,
    username = dbconfig.username,
    password = dbconfig.password,
    { host : dbconfig.host,
      dialect: dbconfig.dialect,
      pool:{
        min:dbconfig.pool.min,
        max:dbconfig.pool.max,
        acquire:dbconfig.pool.acquire,
        ideal:dbconfig.pool.ideal,
      }
    }          
)

sequelize.authenticate().then(()=>{
    console.log("authenticated");
}).catch(err=>{
    console.log(err);
})

db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.employee = require("../src/models/employeeModel")(sequelize,DataTypes);
db.performanceReview = require("../src/models/employeeReviewModel")(sequelize,DataTypes);

db.performanceReview.belongsTo(db.employee,{"foreignKey":'employeeId'})
db.employee.hasMany(db.performanceReview,{"foreignKey":'employeeId'})

sequelize.sync({force:false}).then(()=>{
    console.log("sync done")
})

module.exports = db
const { Sequelize, DataTypes } = require("sequelize")
const dbConfig = require("../../config/dbConfig")

const sequelize = new Sequelize(
    database = dbConfig.database,
    username = dbConfig.username,
    password = dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        pool: {
            min: dbConfig.pool.min,
            max: dbConfig.pool.max,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate().then(()=>{
    console.log("connected and authenticated");
}).catch((err)=>{
    console.log("caught error :",err);
})

const studentData = require("./studentModel")(sequelize, DataTypes);
const projectData = require("./projectModel")(sequelize)

let db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.student = studentData;
db.project = projectData;

db.sequelize.sync().then(()=>{
    console.log("synced db");
})

module.exports = db;

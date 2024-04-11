module.exports = {
    host: "localhost",
    username: "root",
    password: "rootcode",
    database: "sampledb",
    dialect: "mysql",
    pool: {
        min: 0,
        max: 5,
        acquire: 8000,
        idle: 5000
    }
}
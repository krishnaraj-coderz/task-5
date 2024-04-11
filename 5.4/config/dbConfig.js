module.exports = {
    userName:"root",
    password:"rootcode",
    database:"sampleDb",
    host:"localhost",
    dialect:"mysql",
    pool:{
        min:0,
        max:5,
        acquire:8000,
        idle:300
    }
}
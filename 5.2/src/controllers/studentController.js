const db = require("../models");

async function addStudent(req, res) {
    const student = await db.student.create({
        name: req.body.name,
        department: req.body.department,
        mark: req.body.mark,
        passed: req.body.passed,
    })
    res.status(201);
    res.json(student)
}

async function showAllStudents(req, res) {
    const student = await db.student.findAll();
    res.status(200);
    res.json(student);
}

async function showOneStudent(req, res) {
    const student = await db.student.findAll({
        where: {
            id: req.params.id
        }
    })
    res.status(200);
    res.json(student)
}

async function updateStudent(req, res) {
    const student = await db.student.update(
        req.body,
        {
            where: { id: req.body.id }
        }
    )
    res.status(201);
    res.json(student)
}

async function deleteStudent(req, res) {
    await db.student.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200);
    res.send("Deleted")
}

module.exports = { addStudent, showAllStudents, showOneStudent, updateStudent, deleteStudent }
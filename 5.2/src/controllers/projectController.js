const db = require("../models")

//project not getting proper value
async function addProject(req, res) {
  try{
    await db.sequelize.query(`
      INSERT INTO PROJECT (PROJECTNAME,DOMAIN,ONPROCESS,TL,CREATEDAT, UPDATEDAT) VALUES
      ('${req.body.projectname}','${req.body.domain}','${req.body.onprocess}','${req.body.tl}',NOW(),NOW());`
    );
    const [project] = await db.sequelize.query(`
    SELECT * FROM PROJECT WHERE PROJECTNAME='${req.body.projectname}';`)
    res.status(201).json(project);
  }
  catch(error){
    res.status(400).json({"error":"internally occured"})
  }
}

//have to check for giving duplicate array copy
async function showAllProject(req, res) {
  const project = await db.sequelize.query(`SELECT * FROM PROJECT;`);
  res.status(200).json(project[0]);
}

async function showOneProject(req, res) {
  const project = await db.sequelize.query(`SELECT * FROM PROJECT  WHERE ID='${req.params.id}';`);
  res.status(200).json(project[0]);
}

async function updateProject(req, res) {
  await db.sequelize.query(`UPDATE PROJECT SET PROJECTNAME='${req.body.projectname}', 
  DOMAIN='${req.body.domain}',ONPROCESS='${req.body.onprocess}',TL='${req.body.tl}', 
  UPDATEDAT=NOW() WHERE ID='${req.params.id}'`);

  const [project] = await db.sequelize.query(`SELECT * FROM PROJECT WHERE ID='${req.params.id}';`)
  res.status(200).json(project);
}

async function deleteProject(req, res) {
  await db.sequelize.query(`DELETE FROM PROJECT WHERE ID='${req.params.id}'`);
  res.status(200).json({"deleted":1});
}



module.exports = { addProject, showAllProject, showOneProject, updateProject, deleteProject }
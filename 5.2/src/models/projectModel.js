module.exports = (sequelize) => {
    const Projects = sequelize.query(`CREATE TABLE IF NOT EXISTS PROJECT 
    (id INT AUTO_INCREMENT PRIMARY KEY,
    projectname VARCHAR(255) UNIQUE NOT NULL,
    domain VARCHAR(255),
    onprocess BOOLEAN,
    tl VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`
    )
    return Projects;
}
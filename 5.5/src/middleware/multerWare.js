const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "upload/");
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname || "default.json"
        cb(null, fileName)
    }
})

let upload;
try {
    upload = multer({ storage })
}
catch (error) {
    res.status(400).json({ message: "error in uploading file" })
}
module.exports = upload
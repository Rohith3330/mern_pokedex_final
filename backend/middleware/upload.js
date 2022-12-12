const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './frontend/src/screens/upload');
    },
    filename: function(req, file, cb) {   
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    console.log("filefiltering");
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
module.exports=multer({storage,fileFilter});
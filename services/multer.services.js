const multer=require('multer');
const path=require('path');
// Add Avatar

const uploads = multer({
    limits: {
        fileSize: 6000000
    },
    fileFilter (req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|jfif)$/)) {
            cb(new Error('Please Upload Image'))
        }
        cb(null, true)
    }
})

module.exports= uploads
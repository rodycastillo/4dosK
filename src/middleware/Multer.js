const MULTER = require('multer');

const STORAGE = MULTER.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const UPLOAD = MULTER({storage: STORAGE});

module.exports = { UPLOAD };

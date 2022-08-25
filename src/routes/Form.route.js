const { Router } = require('express');
const { CreateForm } = require('../controllers/Form.controller');
const { UPLOAD } = require('../middleware/Multer');
const FormRouter = Router()

FormRouter.post('/saveForm', UPLOAD.single('image'), CreateForm);


module.exports = { FormRouter };
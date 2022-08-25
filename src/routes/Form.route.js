const { Router } = require('express');
const { CreateForm, GetPosts, GetImages } = require('../controllers/Form.controller');
const { UPLOAD } = require('../middleware/Multer');
const FormRouter = Router()

FormRouter.post('/saveForm', UPLOAD.single('image'), CreateForm);

FormRouter.get('/posts', GetPosts);

FormRouter.get('/images', GetImages);


module.exports = { FormRouter };
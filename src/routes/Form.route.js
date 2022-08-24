const { Router } = require('express');
const { CreateForm } = require('../controllers/Form.controller');
const FormRouter = Router()

FormRouter.post('/saveForm', CreateForm);


module.exports = { FormRouter };
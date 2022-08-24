const FormModel = require("../models/Form.model");

const CreateForm = async (req, res) => {

    try {
        const FormSaved = await FormModel.findOne({email: req.email});

        if(FormSaved) {
            return res.status(422).json({message: "This email already exists", status: false, data: ''})
        } else {
            const savingForm = new FormModel(req.body);
            const newFormToSave = await savingForm.save();
            return res.status(201).json({ message: 'Form saved successfull', status: true, data: newFormToSave });
        }
    } catch (error) {
        return res.status(505).json({ message: error, status: false, data: '' })
    }
}

module.exports = {
    CreateForm,
}
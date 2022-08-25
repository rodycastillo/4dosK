const { DOMAIN } = require("../config/default");
const FormModel = require("../models/Form.model");

const CreateForm = async (req, res) => {

    try {
        const FormSaved = await FormModel.findOne({email: req.email});

        if(FormSaved) {
            return res.status(501).json({message: "This email already exists", status: false, data: ''})
        } else {
            const savingForm = new FormModel({
                names: req.body.names,
                email: req.body.email,
                description: req.body.description,
                image: `${DOMAIN}${req.file.path}`
            });
            const newFormToSave = await savingForm.save();
            return res.status(201).json({ message: 'Form saved successfull', status: true, data: newFormToSave });
        }
    } catch (error) {
        return res.status(505).json({ message: error, status: false, data: '' })
    }
}

const GetPosts = async (req, res) => {
    try {
        const POSTS = await FormModel.find();
        res.status(200).json({ message: 'Data was found', status: true, data: POSTS })
        
    } catch (error) {
        return res.status(505).json({ message: error, status: false, data: '' })
    }
}

const GetImages = async (req, res) => {
    try {
        let IMAGES = await FormModel.find();
        IMAGES = IMAGES.map(item => item.image)
        res.status(200).json({ message: 'Images was found', status: true, data: IMAGES });
        
    } catch (error) {
        return res.status(505).json({ message: error, status: false, data: '' })
    }
}

module.exports = {
    CreateForm,
    GetPosts,
    GetImages
}
const {Schema, model} = require('mongoose')


const FormModel = new Schema({
    names: {
        type: String,
        required: [true, "Names is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    image: {
        type: String,
        // required: [true, "Image is required"]
    }
}, {
    timestamps: true,
});


module.exports = model('FormModel', FormModel)
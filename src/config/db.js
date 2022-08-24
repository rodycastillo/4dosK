const { connect } = require('mongoose');
const { MONGO_DB } = require('./default');

const connectDB = async () => {
    try {
        await connect(MONGO_DB).then(() => {
            console.log("DB Connection Success!!");
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { connectDB };
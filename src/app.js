// Packages
const express = require('express');
const http = require('http');
const cors = require('cors')
const logger = require('morgan');
// Variables
const { DOMAIN, PORT } = require('./config/default');
// DB
const { connectDB } = require('./config/db');
// Routes
const { FormRouter } = require('./routes/Form.route');


class App {
    constructor() {
        this.app = express();
        this.domain = DOMAIN;
        this.port = PORT;
        this.server = http.createServer(this.app);
        this.DataBase();
        this.Listen();
        this.Middlewares();
        this.Routes();
    }

    Middlewares() {
        this.app.use('/uploads', express.static('uploads'))
        this.app.use(cors());
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }

    async DataBase() {
        await connectDB();
    }

    Routes() {
        this.app.use('/api/v1/', FormRouter)
    }

    Listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on ${this.domain} 🤪`);
        })
    }

}

module.exports = { App };
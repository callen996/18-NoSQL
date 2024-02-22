const dotenv = require('dotenv');
dotenv.config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const db = require('./config/connection');
const routes = require('./routes');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Example app listening on PORT ${PORT}!`)})
    });
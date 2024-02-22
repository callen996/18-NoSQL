const dotenv = require('dotenv');
dotenv.config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000




app.listen(PORT, () => {
    console.log(process.env.PORT);
    console.log(`Example app listening on PORT ${PORT}!`)})
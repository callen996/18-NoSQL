require('dotenv').config()
const { connect, connection } = require('mongoose');

connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)


module.exports= connection;
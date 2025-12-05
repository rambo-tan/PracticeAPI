const {neon} = require('@neondatabase/serverless');
const dotenv = require('dotenv');

dotenv.config();

const client = neon(process.env.DB_URL);

module.exports = client;
const express = require('express');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const setupSwagger = require('./swagger');

dotenv.config();
const app = express();

app.use(bodyParser.json());

const routes = require('./routes/program.routes');
app.use('/programs', routes);

app.use(express.json());

setupSwagger(app);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
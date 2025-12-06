const express = require('express');
require("dotenv").config();
const setupSwagger = require('./swagger');

const app = express();

app.use(express.json());
setupSwagger(app);

const programRoutes = require('./routes/program.routes');
const studentRoutes = require('./routes/student.routes');

app.use('/programs', programRoutes);
app.use('/students', studentRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
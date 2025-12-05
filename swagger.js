const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Practice API',
            version: '1.0.0',
            description: 'API documentation for Practice API'
        },
    },
    apis:[
        path.join(__dirname, 'swaggerdocs', 'programs.swaggerdocs.js'),
    ],
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwagger(app) {
    app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerSpec));
}

module.exports = setupSwagger;
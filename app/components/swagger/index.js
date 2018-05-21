const express = require('express')
const router = express.Router()
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')
const auth = require('../passport/authMiddleware')


function initSwagger() {
    const swaggerSpec = swaggerJSDoc({
        swaggerDefinition: {
            info: {
                title: 'Документация моего замечательного api',
                version: '1.0.0'
            }
        },
        apis: ['./app/modules/*/controller/*.*']
    })
    router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

initSwagger()

module.exports = router
const swaggerAutogen = require('swagger-autogen')

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API'
    },
    host: 'localhost:3000',
    schemes: ['https', 'http']
}

const outputFile = './swagger.json'
const endPointsFiles = ['./routes/index.js']

//this will generate the swagger.json
swaggerAutogen(outputFile, endPointsFiles, doc)
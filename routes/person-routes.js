//
// Person routes
//

const express = require('express')
const Person = require('../domain/Person')
const PersonController = require('../controllers/person-controller')
const routes = express.Router()
let personlist = []


routes.get('/person', PersonController.getAllPerson)

routes.get('/person/:id', PersonController.getPersonByID)

routes.post('/person', PersonController.createPerson)

routes.delete('/person/:id', PersonController.deletePersonByID)

module.exports = routes
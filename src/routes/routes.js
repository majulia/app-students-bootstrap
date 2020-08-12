const express = require('express')
const routes = express.Router()

const userController = require('../controllers/userController')

routes.post('/users', userController.insert)

routes.get('/users', userController.selectIdAll)

routes.get('/users/:id', userController.selectId)

routes.put('/users/:id', userController.update)

routes.delete('/users/:id', userController.delete)

module.exports = routes
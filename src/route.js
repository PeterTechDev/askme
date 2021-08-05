const express = require('express')
const QuestionController = require('./controllers/QuestionController')

const route = express.Router()

route.get('/', (req, res)=> res.render("index"))
route.get('/room', (req, res)=> res.render("room"))
route.get('/create-room', (req, res)=> res.render("create-room"))

route.post('/room/:room/:question/:action', QuestionController.index)

//os dois pontos é para criar uma variável que ainda não sabemos qual é


module.exports = route
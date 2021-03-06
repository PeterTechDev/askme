const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res)=> res.render("index", {page: 'enter-room'}))
route.get('/create-room', (req, res)=> res.render("index", {page: 'create-room'}))

route.get('/room/:room', (req, res)=> res.render("room"))


route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

//os dois pontos é para criar uma variável que ainda não sabemos qual é


module.exports = route
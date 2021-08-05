const express = require('express')

const route = express.Router()

route.get('/', (req, res)=> res.render("index2"))
route.get('/room', (req, res)=> res.render("room"))
route.get('/create-room', (req, res)=> res.render("create-room"))
route.post('/room/:room/:question/:action', (req, res)=> res.render())
//os dois pontos é para criar uma variável que ainda não sabemos qual é


module.exports = route
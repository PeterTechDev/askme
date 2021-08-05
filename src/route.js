const express = require('express')

const route = express.Router()

route.get('/', (req, res)=> res.render("index2"))
route.get('/room', (req, res)=> res.render("room"))
route.get('/create-room', (req, res)=> res.render("create-room"))

module.exports = route
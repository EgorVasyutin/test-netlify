const express = require('express')
const serverless = require('serverless-http')
const api = express()
const router = express.Router

api.get('/', function (req, res) {
  res.send('Hello World')
})


api.use('/.netlify/functions/api', router)
module.exports.handler = serverless(api)

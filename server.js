const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

const port = 3000


app.get('/', (req, res) => res.send('Hello'))



module.exports = app

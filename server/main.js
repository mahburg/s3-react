require('dotenv').config({path: './.dev.env'})
const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , app = express()
    , S3 = require('./S3.js')

app.use(cors())
app.use(bodyParser.json())

S3(app)

app.listen(3001, _=>{console.log('(I)...(I)')})




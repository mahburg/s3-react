require('dotenv').config({path: './.dev.env'})
const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , app = express()
    , s3 = require('./s3-controller.js')

app.use(cors())

// Add the optional limit to increase the body size so it can hold the files.
app.use(bodyParser.json({limit: '10mb'}))

app.post('/api/photoUpload', s3.uploadPhoto)

const port = 3001
app.listen(port, _=>console.log(`Server listening on ${port}->`))
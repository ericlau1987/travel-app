const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const path = require('path');


const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const { getAPIResult } = require('./checkAPI');

const { SERVER_PORT } = process.env;


const app = express();
// Configure cors to avoid cors-origin issue
app.use(cors());
// Configure express to use body-parser as middle-ware.
app.use(bodyParser());
// Configure express static directory.
app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/check', getAPIResult)

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})



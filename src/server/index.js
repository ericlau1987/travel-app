const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const path = require('path');


const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const { getAPIResult } = require('./checkAPI');
const { getWeatherAPIResult } = require('./checkWeatherAPI');
const { getCityImgAPIResult } = require('./checkImgAPI');

const { SERVER_PORT } = process.env;

const username = process.env.username;
// console.log(username)

const app = express();
// Configure cors to avoid cors-origin issue
app.use(cors());
// Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Configure express static directory.
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('dist/index.html'))
})

app.post('/check', getAPIResult)

app.post('/check/weather', getWeatherAPIResult)

app.post('/check/cityimg', getCityImgAPIResult)

// designates what port the app will listen to for incoming requests

if (process.env.NODE_ENV !== 'test') {
    app.listen(8081, function () {
        console.log('Example app listening on port 8081!')
    });
}


function getApiUsername() {
    return process.env.username
}

module.exports = { getApiUsername }
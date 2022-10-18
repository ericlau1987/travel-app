const { default: axios } = require("axios");

const weatherApp_apiKey = process.env.weatherApp_apiKey;

  const getWeatherAPIResult = async (req, res) => {
    const lat= req.body.lat;
    const lon= req.body.lon;
    // console.log(weatherApp_apiKey);
    const apiUrl = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&key=${weatherApp_apiKey}`
    console.log(apiUrl);
    try {
        const response = await axios.post(apiUrl);;
        const result = response.data;
        // console.log(apiUrl);
        res.send(result);
    } catch(error) {
        console.log('error', error);
    }
  }
  
  module.exports = {
    getWeatherAPIResult
  }

const { default: axios } = require("axios");

// const weatherApp_apiKey = process.env.weatherApp_apiKey;

  const getCityImgAPIResult = async (req, res) => {
    const city= req.body.city;
    const lang= req.body.lang;
    // console.log(weatherApp_apiKey);
    const apiUrl = `https://pixabay.com/api/?key=30637170-3a31004eeac387757c394fc4c&q=${city}&image_type=photo&category=travel&safesearch=true&lang=${lang}&editors_choice=true`
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
    getCityImgAPIResult
  }

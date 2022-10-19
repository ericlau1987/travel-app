const { default: axios } = require("axios");

const username = process.env.username;

  const getAPIResult = async (req, res) => {
    const city= req.body.city;
    // console.log(username);
    const apiUrl = ` http://api.geonames.org/postalCodeSearchJSON?username=${username}&placename=${city}&&maxRows=1`
    // console.log(apiUrl);
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
    getAPIResult
  }

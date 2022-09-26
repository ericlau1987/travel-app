const { default: axios } = require("axios");

const username = process.env.username;

  const getAPIResult = async (req, res) => {
    const postcode= req.body.postcode;
    console.log(username);
    const apiUrl = `api.geonames.org/postalCodeSearch?key=${username}&postalcode=${postcode}`
    console.log(apiUrl);
    try {
        const response = await axios.post(apiUrl);;
        const result = response.data;
        console.log(apiUrl);
        res.send(result);
    } catch(error) {
        console.log('error', error);
    }
  }
  
  module.exports = {
    getAPIResult
  }

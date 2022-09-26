const { default: axios } = require("axios");

const application_key = process.env.API_KEY;

  const getAPIResult = async (req, res) => {
    const url= req.body.url;
    console.log(application_key);
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${application_key}&url=${url}&lang=en`
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

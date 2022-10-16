const validURL = require('valid-url')

function isValidURL(url){
    return true
    // return validURL.isWebUri(url)
}

module.exports = {
    isValidURL
}
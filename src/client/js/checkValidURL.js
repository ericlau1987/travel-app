const validURL = require('valid-url')

function isValidURL(url){
    return validURL.isWebUri(url)
}

module.exports = {
    isValidURL
}
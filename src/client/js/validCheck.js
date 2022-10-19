const validURL = require('valid-url')

function isValidURL(url){
    return true
    // return validURL.isWebUri(url)
}


function isDate (s) {
    if (Object.prototype.toString.call(s) === "[object Date]") {
      return true;
    } else if (isNaN(s)) {
      return false
    }
    return false;
  };

module.exports = {
    isDate
}
const showResult = ({data}) => {
    document.getElementById("longitude").innerHTML = `longitude: ${data.postalCodes[0].lng}`;
    document.getElementById("latitude").innerHTML = `latitude: ${data.postalCodes[0].lat}`;
  // document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
  // document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
  // document.getElementById("score_tag").innerHTML = `Score Tag: ${data.score_tag}`;
}

module.exports = {
    showResult
  }
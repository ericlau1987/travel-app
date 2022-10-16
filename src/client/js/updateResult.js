const showResult = ({locationData}, diff_in_days, latest_weather_forecast) => {
    // document.getElementById("longitude").innerHTML = `longitude: ${locationData.postalCodes[0].lng}`;
    // document.getElementById("latitude").innerHTML = `latitude: ${locationData.postalCodes[0].placeName}`;
    // document.getElementById("countrycode").innerHTML = `countrycode: ${locationData.postalCodes[0].countryCode}`;
    // document.getElementById("dateDiff").innerHTML = `count down: ${diff_in_days} days`;
    // document.getElementById("high-temp").innerHTML = `Highest Temperature: ${latest_weather_forecast.app_max_temp} Celsius`;
    // document.getElementById("low-temp").innerHTML = `Lowest Temperature: ${latest_weather_forecast.app_min_temp} Celsius`;
    // document.getElementById("weather").innerHTML = `Weather: ${latest_weather_forecast.weather.description}`;
    const city = locationData.postalCodes[0].placeName
    const country = locationData.postalCodes[0].countryCode 
    const daysCountDown = diff_in_days
    const highTemp = latest_weather_forecast.app_max_temp
    const lowTemp = latest_weather_forecast.app_min_temp
    const weatherDesc = latest_weather_forecast.weather.description

    document.getElementById("location").innerHTML = `${city}, ${country} is ${daysCountDown} days away`
    document.getElementById("weather").innerHTML = `Typical weather for then is : <br> High - ${highTemp}, Low = ${lowTemp}<br> ${weatherDesc}`

}

module.exports = {
    showResult
  }
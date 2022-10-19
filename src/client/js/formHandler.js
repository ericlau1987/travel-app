const { isDate } = require('./validCheck')
const { fetchData } = require('./fetchData')
const { fetchWeatherData } = require('./fetchWeatherData')
const { showResult } = require('./updateResult')
const { dateDiff } = require('./countDown')
const { fetchCityWeatherImg } = require('./fetchCityWeatherImg')

const handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let city = document.getElementById('city').value
    let endDate = new Date(document.getElementById('flight-date').value)
    let endTravleDate = new Date(document.getElementById('flight-end-date').value)

    if (!city) {
        alert('Your input is empty');
    } else if (!document.getElementById('flight-date').value) {
        alert('Your input is not a date format');
    } else if(!document.getElementById('flight-end-date').value) {
        alert('Your input is not a date format');
    } else if (!isDate(endDate)) {
        alert('Your input is not a date forma');
    } else if(!isDate(endTravleDate)) {
        alert('Your input is not a date format');
    }

    if (endTravleDate<endDate) {
        alert ('Your return day should not be earlier than departure date')
    }

    console.log(endTravleDate>=endDate)

    let startDate = new Date()

    console.log("::: Form Submitted :::")

    const locationData = await fetchData('http://localhost:8081/check', {city: city});
    // to-do: alert if the city is not located and no result is returned. 

    const diff_in_days = dateDiff(startDate, endDate)
    const travel_diff_in_days = dateDiff(endDate, endTravleDate)
    

    const lat = locationData.postalCodes[0].lat
    const lon = locationData.postalCodes[0].lng
    const lang = locationData.postalCodes[0].countryCode

    const weatherForecastData = await fetchWeatherData('http://localhost:8081/check/weather', {lat: lat, lon: lon})
    const cityWeatherImgUrl = await fetchCityWeatherImg('http://localhost:8081/check/cityimg', {city: city, lang: lang})

    const latest_weather_forecast = weatherForecastData.data[Math.min(diff_in_days,15)]

    showResult({locationData}, diff_in_days, latest_weather_forecast, travel_diff_in_days, cityWeatherImgUrl)

}

export { handleSubmit }

const { isValidURL } = require('./checkValidURL')
const { fetchData } = require('./fetchData')
const { fetchWeatherData } = require('./fetchWeatherData')
const { showResult } = require('./updateResult')
const { dateDiff } = require('./countDown')

const handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let city = document.getElementById('city').value
    let endDate = new Date(document.getElementById('flight-date').value)
    let startDate = new Date()

    console.log(endDate)

    // console.log(postcode)
    console.log("::: Form Submitted :::")

    const locationData = await fetchData('http://localhost:8081/check', {city: city});
    // to-do: alert if the city is not located and no result is returned. 
    // showResult({data});

    console.log(locationData)

    const diff_in_days = dateDiff(startDate, endDate)
    

    const lat = locationData.postalCodes[0].lat

    const lon = locationData.postalCodes[0].lng
    const weatherForecastData = await fetchWeatherData('http://localhost:8081/check/weather', {lat: lat, lon: lon})

    const latest_weather_forecast = weatherForecastData.data[Math.min(diff_in_days,15)]
    
    console.log(latest_weather_forecast)

    showResult({locationData}, diff_in_days, latest_weather_forecast)

}

export { handleSubmit }

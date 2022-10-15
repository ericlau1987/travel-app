const { isValidURL } = require('./checkValidURL')
const { fetchData } = require('./fetchData')
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

    if (isValidURL(city)) {
        const data = await fetchData('http://localhost:8081/check', {city: city});
        // to-do: alert if the city is not located and no result is returned. 
        showResult({data});
        // console.log(data)

    } else {
        alert("Please provide a valid postcode.")
    }

    // const diff_in_time = endDate - startDate;
    // const diff_in_days = Math.round(diff_in_time /(1000*3600*24));

    const diff_in_days = dateDiff(startDate, endDate)


    document.getElementById("dateDiff").innerHTML = `count down: ${diff_in_days} days`;
}

export { handleSubmit }

const { isValidURL } = require('./checkValidURL')
const { fetchData } = require('./fetchData')
const { showResult } = require('./updateResult')

const handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let city = document.getElementById('city').value

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
}

export { handleSubmit }

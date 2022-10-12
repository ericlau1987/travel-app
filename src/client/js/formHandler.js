const { isValidURL } = require('./checkValidURL')
const { fetchData } = require('./fetchData')
const { showResult } = require('./updateResult')

const handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let postcode = document.getElementById('postcode').value

    // console.log(postcode)
    console.log("::: Form Submitted :::")

    if (isValidURL(postcode)) {
        const data = await fetchData('http://localhost:8080/check', {postcode: postcode});
        showResult({data});
        // console.log(data)

    } else {
        alert("Please provide a valid postcode.")
    }
}

export { handleSubmit }

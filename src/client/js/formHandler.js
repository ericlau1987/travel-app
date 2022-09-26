const { isValidURL } = require('./checkValidURL')
const { fetchData } = require('./fetchData')
const { showResult } = require('./updateResult')

const handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let urlInput = document.getElementById('name').value

    console.log("::: Form Submitted :::")

    if (isValidURL(urlInput)) {
        const data = await fetchData('http://localhost:8080/check', {url: urlInput});
        showResult({data});

    } else {
        alert("Please provide a valid url.")
    }
}

export { handleSubmit }

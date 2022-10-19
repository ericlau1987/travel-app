import { handleSubmit } from './js/formHandler'
import './styles/style.scss'

window.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', handleSubmit);
  })

// alert("I EXIST")
// console.log("CHANGE!!");

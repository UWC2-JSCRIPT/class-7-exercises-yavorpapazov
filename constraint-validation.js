document.addEventListener("DOMContentLoaded", function() {
// TODO
    let firstName = document.querySelector('#first-name')
    let lastName = document.querySelector('#last-name')
    let email = document.querySelector('#email')
    let form = document.querySelector('#connect-form')
    firstName.addEventListener('input', (e) => {
        if(firstName.validity.tooShort) {
            firstName.setCustomValidity("Please, use more than 3 characters!")
            firstName.reportValidity()
        } else {
            firstName.setCustomValidity("")
        }
    })
    lastName.addEventListener('input', (e) => {
        if(lastName.validity.tooShort) {
            lastName.setCustomValidity("Please, use more than 3 characters!")
            lastName.reportValidity()
        } else {
            lastName.setCustomValidity("")
        }
    })
    email.addEventListener("input", (e) => {
        if(email.validity.typeMismatch) {
            email.setCustomValidity("Please enter a valid e-mail address!")
            email.reportValidity()
        } else {
            email.setCustomValidity("")
        }
    })
    form.addEventListener('submit', (e) => {
        if(firstName.validity.tooShort || lastName.validity.tooShort || email.validity.typeMismatch) {
            e.preventDefault()
            alert('Please correct your form inputs!')
        }
    })
})
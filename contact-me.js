document.addEventListener("DOMContentLoaded", function() {
    // TODO
    let selectContactReason = document.querySelector('#contact-reason')
    let divJobTitle = document.querySelector('.job-title')
    let divWebsite = document.querySelector('.website')
    let divCodingLanguage = document.querySelector('.coding-language')
    let yourName = document.querySelector('#your-name')
    let email = document.querySelector('#email')
    let message = document.querySelector('#your-message')
    let form = document.querySelector('#connect-form')
    selectContactReason.addEventListener('change', () => {
        if(selectContactReason.value === 'opportunity') {
            divJobTitle.classList.remove('disable')
            divWebsite.classList.remove('disable')
            divCodingLanguage.classList.add('disable')
        } else if(selectContactReason.value === 'code') {
            divCodingLanguage.classList.remove('disable')
            divJobTitle.classList.add('disable')
            divWebsite.classList.add('disable')
        }
    })
    yourName.addEventListener('input', (e) => {
        if(yourName.validity.tooShort) {
            yourName.setCustomValidity("Please use 3 or more characters!")
            yourName.reportValidity()
        } else {
            yourName.setCustomValidity("")
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
    message.addEventListener('input', (e) => {
        if(message.validity.tooShort) {
            message.setCustomValidity("Please use 10 or more characters!")
            message.reportValidity()
        } else {
            message.setCustomValidity("")
        }
    })
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if(yourName.validity.tooShort) {
            yourName.nextElementSibling.textContent = 'Please correct your Name input!'
        }
        if(!yourName.validity.tooShort) {
            yourName.nextElementSibling.textContent = ''
        }
        if(email.validity.typeMismatch) {
            email.nextElementSibling.textContent = 'Please correct your Email input!'
        }
        if(!email.validity.typeMismatch) {
            email.nextElementSibling.textContent = ''
        }
        if(message.validity.tooShort) {
            message.nextElementSibling.textContent = 'Please correct your Message input!'
        }
        if(!message.validity.tooShort) {
            message.nextElementSibling.textContent = ''
        }
    })
})
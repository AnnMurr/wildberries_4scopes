const loginWrapper = document.querySelector('.user__login')
const registrationWrapper = document.querySelector('.user__registration')

export function successAuthentication(formClass, message) {
    const form = document.querySelector(formClass)
    const parent = form.parentNode
    parent.innerHTML = null
    const successContainer = document.createElement('div')
    const successMessage = document.createElement('span')
    successContainer.classList.add('success-container')
    successMessage.classList.add('success-message')
    successMessage.textContent = message
    successContainer.appendChild(successMessage)
    parent.append(successContainer)
    setTimeout(function () {
        parent.remove()
        loginWrapper.classList.remove('user__login_active')
        registrationWrapper.classList.remove('user__registration_active')
    }, 3000)
}
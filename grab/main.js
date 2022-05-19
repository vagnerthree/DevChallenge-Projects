const input = document.querySelectorAll('[required]')

function setError(event) {
    const inputT = event.target
    inputT.parentElement.classList.add('error')
}

for (const inputs of input) {
    inputs.addEventListener('invalid', setError)
}
const mobile = document.getElementById('menu')

function opmobile() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('ativo')
}

mobile.addEventListener('click', opmobile)
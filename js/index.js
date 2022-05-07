const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    nav.classList.toggle('active')
    burger.classList.toggle('active')
})

nav.addEventListener('click', (e) => {
    if (e.target === nav) {
        nav.classList.toggle('active')
        burger.classList.toggle('active')
    }
})
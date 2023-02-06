document.getElementById("year").innerHTML = new Date().getFullYear();


const menuToggle = document.querySelector('.menu-toggle input')
const nav = document.querySelector('nav ul')
const form = document.querySelector('.c-pesan')
const submit = document.querySelector('.submit')
const aNavbar = document.querySelectorAll('.a-navbar')


menuToggle.addEventListener ('click', function() {
    nav.classList.toggle('slide')
})

aNavbar.forEach((aNavbar) => {
    aNavbar.addEventListener('click', function() {
        nav.classList.remove('slide')
    })
})
// aNavbar[0].addEventListener('click', function() {
//     nav.classList.remove('slide')
// })
// aNavbar[1].addEventListener('click', function() {
//     nav.classList.remove('slide')
// })
// aNavbar[2].addEventListener('click', function() {
//     nav.classList.remove('slide')
// })
// aNavbar[3].addEventListener('click', function() {
//     nav.classList.remove('slide')
// })


form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('pesan anda sudah terkirim')
    alert('tapi boong aokawokwokawo')
})

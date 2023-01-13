document.getElementById("year").innerHTML = new Date().getFullYear();


const menuToggle = document.querySelector('.menu-toggle input')
const nav = document.querySelector('nav ul')
const form = document.querySelector('.c-pesan')
const submit = document.querySelector('.submit')

menuToggle.addEventListener ('click', function() {
    nav.classList.toggle('slide')
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('pesan anda sudah terkirim')
    alert('tapi boong aokawokwokawo')
})

function submit() {
    alert("pesan anda sudah terkirim")
    alert('tapii boong')
}

document.getElementById("year").innerHTML = new Date().getFullYear();


const menuToggle = document.querySelector('.menu-toggle input')
const nav = document.querySelector('nav ul')

menuToggle.addEventListener ('click', function() {
    nav.classList.toggle('slide')
    
})
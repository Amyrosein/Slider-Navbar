const menuBar = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-times')
const navbar = document.querySelector('.navbar')
const nav = document.querySelector('.clickDiv')


menuBar.addEventListener("click",()=>{
    navbar.classList.add('show')
    nav.classList.add('hidebars')
    menuBar.classList.add('hidebars')
})
close.addEventListener("click",()=>{
    navbar.classList.remove('show')
    nav.classList.remove('hidebars')
    menuBar.classList.remove('hidebars')

})


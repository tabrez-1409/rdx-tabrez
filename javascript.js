hamburger = document.querySelector('.hamburger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')

hamburger.addEventListener('click', () => {
    navlist.classList.toggle('visibility-resp');
    rightnav.classList.toggle('visibility-resp');
    navbar.classList.toggle('h-nav-resp');
})
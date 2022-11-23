let burger = document.querySelector('.burger');
let menu = document.querySelector('.burger__menu')
let menuLinks = menu.querySelectorAll('.burger__link');
burger.addEventListener('click', 
function () {

menu.classList.toggle('burger__menu--active')
}
)

menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
      menu.classList.remove ('burger__menu--active');
    })})
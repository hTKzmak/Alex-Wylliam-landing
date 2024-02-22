let buttonMenu = document.querySelector('.header-mobile-menu');

buttonMenu.addEventListener('click', function(){
    alert('Open menu');
})

AOS.init({
    disable: 'phone',
    once: true
});
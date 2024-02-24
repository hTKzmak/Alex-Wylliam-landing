const buttonMenu = document.querySelector('.header-mobile-btn');
const headerMenuMobile = document.querySelector('.header-menu-mobile');
const navBtnImg = document.querySelector('#nav-btn-img');

buttonMenu.addEventListener('click', function () {
    if(headerMenuMobile.classList.toggle('open')){
        navBtnImg.src = './images/close_menu.svg'
    } 
    else{
        navBtnImg.src = './images/menu.svg'
    }
});

AOS.init({
    disable: 'phone',
    once: true
});
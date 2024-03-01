const buttonMenu = document.querySelector('.header-mobile-btn');
const headerMenuMobile = document.querySelector('.header-menu-mobile');
const navBtnImg = document.querySelector('#nav-btn-img');

const contactWindow = document.querySelector('.contact-window');
const btnMessage = document.body.querySelector('.message-button');

buttonMenu.addEventListener('click', function () {
    if (headerMenuMobile.classList.toggle('open')) {
        navBtnImg.src = './images/close_menu.svg'
        document.body.style.overflow = 'hidden'
    }
    else {
        navBtnImg.src = './images/menu.svg'
        document.body.style.overflow = 'auto'
    }
});

btnMessage.addEventListener('click', function() {
    
    if(contactWindow.classList.toggle('open')){
        contactWindow.innerHTML = `
            <div class="form-window">
                <form onclick="event.preventDefault()" class="formMessage">
                    <button class="btn" onclick="contactWindow.classList.remove('open')">
                        <img id="nav-btn-img" src="../images/close_menu.svg" alt="menu button">
                    </button>
                    <div class="input-item">
                        <p>Your name</p>
                        <input type="text" id="inputItem">
                    </div>
                    <div class="input-item">
                        <p>Your email</p>
                        <input type="text" id="inputItem">
                    </div>
                    <div class="input-item">
                        <p>Your phone</p>
                        <input type="text" id="inputItem">
                    </div>
                    <button class="submit">Send</button>
                </form>
            </div>
        `
    }
})


AOS.init({
    // disable: 'phone',
    once: true
});
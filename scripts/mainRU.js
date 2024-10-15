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

function showingMobileMenu() {
    headerMenuMobile.classList.remove('open')
    navBtnImg.src = './images/menu.svg'
    document.body.style.overflow = 'auto'
}


btnMessage.addEventListener('click', function () {
    if (contactWindow.classList.toggle('open')) {
        const formWindow = document.createElement('div');
        formWindow.classList.add('form-window');

        // предотвращение обновления страницы для form
        const form = document.createElement('form');
        form.classList.add('formMessage');
        form.addEventListener('click', function (event) {
            event.preventDefault();
        });


        // кнопка закрытия окна
        const closeButton = document.createElement('button');
        closeButton.classList.add('btn');
        closeButton.innerHTML = '<img id="nav-btn-img" src="./images/close_menu.svg" alt="menu button">';
        closeButton.addEventListener('click', function () {
            contactWindow.classList.remove('open');
        });


        // строки ввода данных
        const inputItemName = document.createElement('div');
        inputItemName.classList.add('input-item');
        inputItemName.innerHTML = '<p>Твоё имя</p><input type="text" id="inputName">';
        const inputItemEmail = document.createElement('div');
        inputItemEmail.classList.add('input-item');
        inputItemEmail.innerHTML = '<p>Твоя почта</p><input type="email" id="inputEmail">';
        const inputItemPhone = document.createElement('div');
        inputItemPhone.classList.add('input-item');
        inputItemPhone.innerHTML = '<p>Твой телефон</p><input type="tel" id="inputPhone">';

        // добавление кнопки для отправления данных
        const submitButton = document.createElement('button');
        submitButton.classList.add('submit');
        submitButton.textContent = 'Отправить';

        // отправка данных в консоль и отображение на странице
        submitButton.addEventListener('click', function () {

            let inputName = document.querySelector('#inputName')
            let inputEmail = document.querySelector('#inputEmail')
            let inputPhone = document.querySelector('#inputPhone')


            if(inputName.value != '' && inputEmail.value != '' && inputPhone.value != ''){
                console.log(`Name: ${inputName.value} | Email: ${inputEmail.value}, | Phone: ${inputPhone.value}`);
    
                formWindow.innerHTML = `
                <div class="form-message">
                    <button class="btn" onclick="contactWindow.classList.remove('open')">
                        <img id="nav-btn-img" src="./images/close_menu.svg" alt="menu button">
                    </button>
                    <h1>Твой запрос был отправлен</h1>
                    <h3 style="margin-top: 20px">Твои данные:</h3>
                        <ul>
                            <li>Name: ${inputName.value}</li>
                            <li>Email: ${inputEmail.value}</li>
                            <li>Phone: ${inputPhone.value}</li>
                        </ul>
                </div>
                `
            }
            else{
                inputName.style.backgroundColor = (inputName.value != '') ? '' : '#ff535379';
                inputEmail.style.backgroundColor = (inputEmail.value != '') ? '' : '#ff535379';
                inputPhone.style.backgroundColor = (inputPhone.value != '') ? '' : '#ff535379';
            }
        })

        // добавление:
        form.appendChild(closeButton);
        form.appendChild(inputItemName);
        form.appendChild(inputItemEmail);
        form.appendChild(inputItemPhone);
        form.appendChild(submitButton);
        formWindow.appendChild(form);
        contactWindow.innerHTML = '';
        contactWindow.appendChild(formWindow);
    }
})

AOS.init({
    // disable: 'phone',
    once: true
});

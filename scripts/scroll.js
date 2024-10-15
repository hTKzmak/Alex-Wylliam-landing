const homeLink = document.querySelectorAll('#home');
const aboutLink = document.querySelectorAll('#about')
const skillsLink = document.querySelectorAll('#skills')
// const portLink = document.querySelectorAll('#portfolio')
const contactsLink = document.querySelectorAll('#contacts')

const scrollSettings = { behavior: "smooth", block: "center", inline: "start" }


homeLink.forEach(elem => {
    elem.addEventListener('click', () => {
        showingMobileMenu()
        document.querySelector('header').scrollIntoView(scrollSettings)
    })
})

aboutLink.forEach(elem => {
    elem.addEventListener('click', () => {
        showingMobileMenu()
        document.querySelector('.about-page').scrollIntoView(scrollSettings)
    })
})

skillsLink.forEach(elem => {
    elem.addEventListener('click', () => {
        showingMobileMenu()
        document.querySelector('.skills-page').scrollIntoView(scrollSettings)
    })
})

contactsLink.forEach(elem => {
    elem.addEventListener('click', () => {
        showingMobileMenu()
        document.querySelector('footer').scrollIntoView(scrollSettings)
    })
})

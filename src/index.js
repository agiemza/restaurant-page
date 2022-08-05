import "./style.css"
import Hamburger from "./hamburger-icon.svg"
import Close from "./close-icon.svg"

function createNav() {
    const menuElements = ["Home", "Menu", "About", "Contact"]
    const nav = document.createElement("nav")

    const logo = document.createElement("div")
    logo.classList.add("logo")
    logo.textContent = "La Fourchette"

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("nav-menu-container")

    const menu = document.createElement("ul")
    menu.classList.add("nav-menu")

    menuElements.forEach(element => {
        const listElement = document.createElement("li")
        listElement.textContent = element
        menu.appendChild(listElement)
    })

    menuContainer.appendChild(menu)

    const closeBtn = new Image()
    closeBtn.src = Close
    closeBtn.classList.add("close-button", "hidden")
    closeBtn.textContent = "CLOSE"
    closeBtn.addEventListener("click", () => {
        menuContainer.classList.remove("nav-menu-fullscreen")
        // nav.removeChild(closeBtn)
        // nav.appendChild(hamburger)
        hamburger.classList.remove("hidden")
        hamburger.classList.add("visible")
        closeBtn.classList.remove("visible")
        closeBtn.classList.add("hidden")
    })


    const hamburger = new Image()
    hamburger.src = Hamburger
    hamburger.classList.add("hamburger")
    hamburger.addEventListener("click", () => {
        menuContainer.classList.add("nav-menu-fullscreen")
        // nav.removeChild(hamburger)
        // nav.appendChild(closeBtn)
        closeBtn.classList.remove("hidden")
        closeBtn.classList.add("visible")
        hamburger.classList.remove("visible")
        hamburger.classList.add("hidden")

    })

    const buttonsContainer = document.createElement("div")
    buttonsContainer.classList.add("buttons-container")
    buttonsContainer.appendChild(hamburger)
    buttonsContainer.appendChild(closeBtn)


    nav.appendChild(logo)
    nav.appendChild(menuContainer)
    nav.appendChild(buttonsContainer)

    return nav
}

function createHero() {
    const heroContainer = document.createElement("main")
    return heroContainer
}

document.querySelector("#content").appendChild(createNav())
document.querySelector("#content").appendChild(createHero())
import "./style.css"
import MenuIcon from "./menu-icon.svg"

function createNav() {
    const nav = document.createElement("nav")

    const logo = document.createElement("div")
    logo.classList.add("logo")
    logo.textContent = "La Fourchette"

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("nav-menu-container")

    const closeBtnContainer = document.createElement("div")
    closeBtnContainer.classList.add("close-button-container")
    const closeBtn = document.createElement("button")
    closeBtn.classList.add("close-button")
    closeBtn.textContent="CLOSE"
    closeBtn.addEventListener("click", () => {
        menuContainer.classList.remove("nav-menu-fullscreen")
    })
    closeBtnContainer.appendChild(closeBtn)

    const menu = document.createElement("ul")
    menu.classList.add("nav-menu")
    
    const menuElements = ["Menu", "About", "Contact"]

    menuElements.forEach(element => {
        const listElement = document.createElement("li")
        listElement.textContent = element
        menu.appendChild(listElement)
    })

    const menuFooter = document.createElement("div")
    menuFooter.classList.add("nav-menu-footer")
    menuFooter.textContent = "10C Imaginary Street, 30-000 Cracow"

    menuContainer.appendChild(closeBtnContainer)
    menuContainer.appendChild(menu)
    menuContainer.appendChild(menuFooter)

    const hamburger = new Image()
    hamburger.src = MenuIcon
    hamburger.classList.add("hamburger")
    hamburger.addEventListener("click", () => {
        menuContainer.classList.add("nav-menu-fullscreen")
    })

    nav.appendChild(logo)
    nav.appendChild(menuContainer)
    nav.appendChild(hamburger)

    return nav
}

function createHero() {
    const heroContainer = document.createElement("main")
    return heroContainer
}

document.querySelector("#content").appendChild(createNav())
document.querySelector("#content").appendChild(createHero())
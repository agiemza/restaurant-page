import OpenIcon from "../hamburger-icon.svg"
import CloseIcon from "../close-icon.svg"

function nav() {
    const menuElements = ["Home", "Menu", "About", "Contact"]
    const nav = document.createElement("nav")

    const logo = createLogo("La Fourchette")
    const menu = createMenu(menuElements)
    const controlls = createControlls()

    nav.appendChild(logo)
    nav.appendChild(menu)
    nav.appendChild(controlls)

    return nav
}

function createLogo(text) {
    const logo = document.createElement("div")
    logo.classList.add("logo")
    logo.textContent = text
    return logo
}

function createMenu(elements) {
    const menu = document.createElement("div")
    menu.classList.add("nav-menu-container")

    const list = document.createElement("ul")
    list.classList.add("nav-menu")

    elements.forEach(element => {
        const li = document.createElement("li")
        li.classList.add("tab", `${element}`.toLowerCase())
        li.textContent = element
        list.appendChild(li)
    })

    menu.appendChild(list)

    return menu
}

function createControlls() {
    const container = document.createElement("div")
    container.classList.add("buttons-container")

    const openButton = createOpenButton()
    const closeButton = createCloseButton()

    container.appendChild(openButton)
    container.appendChild(closeButton)

    return container
}

function createOpenButton() {
    const openButton = new Image()
    openButton.src = OpenIcon
    openButton.classList.add("open-button", "visible")

    openButton.addEventListener("click", () => handleClick("open"))

    return openButton
}

function createCloseButton() {
    const closeButton = new Image()
    closeButton.src = CloseIcon
    closeButton.classList.add("close-button", "hidden")

    closeButton.addEventListener("click", () => handleClick("close"))
    return closeButton
}

function handleClick(action) {
    if (action === "close") {
        toggleFullScreen("remove")
        showButton("open")
    }
    if (action === "open") {
        toggleFullScreen("add")
        showButton("close")
    }
}

function toggleFullScreen(action) {
    document.querySelector(".nav-menu-container").classList[action]("nav-fullscreen")
    setTimeout(() => {
        document.querySelector(".nav-menu").classList[action]("nav-menu-open")
    }, 0);
}

function showButton(button) {
    const active = document.querySelector(`.${button}-button`)
    const inactive = document.querySelector(`.${button === "open" ? "close" : "open"}-button`)
    active.classList.remove("hidden")
    active.classList.add("visible")
    inactive.classList.remove("visible")
    inactive.classList.add("hidden")
}

export default nav
export { handleClick }
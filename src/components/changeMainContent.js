import home from "./pages/home"
import menu from "./pages/menu"
import about from "./pages/about"
import contact from "./pages/contact"

export default function changeMainContent(page) {
    switch (page) {
        case "home":
            page = home
            break
        case "menu":
            page = menu
            break
        case "about":
            page = about
            break
        case "contact":
            page = contact
            break
    }
    const main = document.querySelector("main")
    main.innerHTML = ""
    main.appendChild(page())
}
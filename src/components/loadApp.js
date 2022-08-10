import "../style.css"
import footer from "./footer"
import nav from "./nav"
import switchTab from "./switchTab"

export default function loadApp() {
    const content = document.querySelector("#content")
    const main = document.createElement("main")
    
    content.appendChild(nav())
    content.appendChild(main)
    content.appendChild(footer())

    switchTab("home")
}
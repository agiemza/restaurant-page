import "../style.css"
import nav from "./nav"
import switchTab from "./switch-tab"

export default function ui() {
    const content = document.querySelector("#content")
    const main = document.createElement("main")
    content.appendChild(nav())
    content.appendChild(main)
    switchTab("home")
}
import "../style.css"
import home from "./home"
import navbar from "./navbar"

export default function ui() {
    
    // Navbar
    document.querySelector("#content").appendChild(navbar())

    // Main content
    document.querySelector("#content").appendChild(home())
    
}
import changeContent from "./changeMainContent"
import { handleClick as closeMenu } from "./nav"

export default function switchTab(tab) {
    const tabs = document.querySelectorAll(".tab")
    setEventListeners(tabs)
    setActive(document.querySelector(`.${tab}`))
}

function setEventListeners(elements) {
    elements.forEach(element => {
        element.addEventListener("click", () => handleClick(elements, element))
    })
    document.querySelector(".logo").addEventListener("click", () => handleClick(elements, elements[0]))
}

function handleClick(elements, element) {
    elements.forEach(tab => {
        setInactive(tab)
    })
    setActive(element)
    closeMenu("close")
}

function setActive(element) {
    element.classList.add("active-tab")
    changeContent(element.textContent.toLowerCase())
}

function setInactive(element) {
    element.classList.remove("active-tab")
}
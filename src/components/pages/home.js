export default function home() {
    const element = document.createElement("div")
    element.classList.add("home-page")

    element.appendChild(createHero())

    return element
}

function createHero() {
    const container = document.createElement("section")
    container.classList.add("home-hero", "hero")

    const title = document.createElement("h1")
    title.innerHTML = "Bienvenue<br>à La Fourchette"
    const subtitle = document.createElement("h3")
    subtitle.textContent = "Traditional French Couisine Restaurant"

    container.appendChild(title)
    container.appendChild(subtitle)

    return container
}
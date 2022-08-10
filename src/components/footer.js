import GitHub from "../images/icons/github.png"

export default function footer() {
    const footer = document.createElement("footer")

    const gitLink = document.createElement("a")
    gitLink.href = "https://github.com/agiemza/restaurant-page/"
    const gitImg = new Image()
    gitImg.src = GitHub
    
    const textContainer = document.createElement("div")
    textContainer.textContent = "Arkadiusz Giemza"

    gitLink.appendChild(gitImg)
    gitLink.appendChild(textContainer)

    footer.appendChild(gitLink)

    return footer
}
import img1 from "../../images/card1.jpg"
import img2 from "../../images/card2.jpg"
import img3 from "../../images/card3.jpg"

export default function about() {
    const element = document.createElement("div")
    element.classList.add("about-page")

    element.appendChild(createCard(img1, "La Fourchette is a traditional French restaurant."))
    element.appendChild(createCard(img2, "There is no love sincerer than the love of food. ~George B. Shaw"))
    element.appendChild(createCard(img3, "Wine is our second love. Come and taste finest vitages selected by our sommelier Jean Pierre!"))

    return element
}

function createCard(image, text) {
    const card = document.createElement("div")
    card.classList.add("card")

    const cardImage = new Image()
    cardImage.src = image
    cardImage.classList.add("card-image")

    const cardTextWrapper = document.createElement("div")
    cardTextWrapper.classList.add("card-text-wrapper")

    const cardText = document.createElement("h3")
    cardText.classList.add("card-text")
    cardText.textContent = text
    cardTextWrapper.appendChild(cardText)


    card.appendChild(cardImage)
    card.appendChild(cardTextWrapper)

    return card
}
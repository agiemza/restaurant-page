import Dishes from "../dishes"

export default function menu() {
    const element = document.createElement("div")
    element.classList.add("menu-page")

    element.appendChild(createHero())
    element.appendChild(createMenu())

    return element
}

function createHero() {
    const menuHero = document.createElement("section")
    menuHero.classList.add("menu-hero")

    const title = document.createElement("h1")
    title.textContent = "Menu"

    menuHero.appendChild(title)

    return menuHero
}

function createMenu() {
    const dishList = document.createElement("section")
    dishList.classList.add("menu-list")

    Object.entries(Dishes).forEach(([category, dishes]) => {
        const categoryWrapper = document.createElement("div")
        categoryWrapper.classList.add("menu-category")

        // create category title
        const categoryTitle = document.createElement("h2")
        categoryWrapper.appendChild(categoryTitle)

        dishes.forEach((item, index) => {
            if (index === 0) {
                categoryTitle.textContent = item.category
            }
            if (index !== 0) {
                const container = document.createElement("div")
                container.classList.add("menu-item-container")

                // create dish title and price line
                const mainLine = document.createElement("div")

                const dishName = document.createElement("div")
                dishName.textContent = item.name

                const price = document.createElement("div")
                price.textContent = `${item.price} EUR`

                mainLine.appendChild(dishName)
                mainLine.appendChild(price)

                // create dish description line
                const descritpion = document.createElement("p")
                descritpion.textContent = item.descritpion

                container.appendChild(mainLine)
                container.appendChild(descritpion)

                categoryWrapper.appendChild(container)
            }

        })
        dishList.appendChild(categoryWrapper)
    })

    return dishList
}
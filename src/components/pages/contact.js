import companyData from "../data/companyData"

export default function contact() {
    const element = document.createElement("div")
    element.classList.add("contact")

    element.appendChild(createHero())
    element.appendChild(createCompanyData())
    return element
}

function createHero() {
    const container = document.createElement("section")
    container.classList.add("contact-hero", "hero")

    const title = document.createElement("h1")
    title.innerHTML = "Contact"

    container.appendChild(title)

    return container
}

function createCompanyData() {
    const container = document.createElement("section")
    container.classList.add("contact-details-wrapper")

    const textContainer = document.createElement("div")
    textContainer.classList.add("contact-details")

    Object.entries(companyData).forEach(([key, value]) => {
        const wrapper = document.createElement("div")
        wrapper.classList.add("contact-entry")

        const keyContainer = document.createElement("h2")
        keyContainer.classList.add("contact-info-title")
        key = key.toString()
        keyContainer.textContent = key[0].toUpperCase() + key.slice(1)
        wrapper.appendChild(keyContainer)

        const valueContainer = document.createElement("div")
        valueContainer.classList.add("contact-info")
        valueContainer.textContent = value
        wrapper.appendChild(valueContainer)


        textContainer.appendChild(wrapper)
    })

    // const mapContainer = document.createElement("div")

    container.appendChild(textContainer)

    return container
}
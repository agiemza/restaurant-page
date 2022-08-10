import companyData from "../data/companyData"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"
import "leaflet-defaulticon-compatibility"

export default function contact() {
    const element = document.createElement("div")
    element.classList.add("contact-page")
    element.appendChild(createHero())
    element.appendChild(createDetailsSection())
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

function createDetailsSection() {
    const container = document.createElement("section")
    container.classList.add("contact-details-wrapper")

    container.appendChild(createCompanyData())
    container.appendChild(createMap())

    return container
}

function createCompanyData() {
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

    return textContainer
}


function createMap() {
    const mapWrapper = document.createElement("div")
    mapWrapper.classList.add("contact-map")

    const mapContainer = document.createElement("div")
    mapContainer.id = "map"

    mapWrapper.appendChild(mapContainer)

    const map = L.map(mapContainer).setView([51.51980100799976, -0.14275167574379952], 13)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    L.marker([51.51980100799976, -0.14275167574379952]).addTo(map)
        .bindPopup("We are here!")

    // adjust mapsize when its DOM element is loaded
    setTimeout(function () {
        map.invalidateSize();
    }, 100);

    return mapWrapper
}
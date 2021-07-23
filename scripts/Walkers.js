import { getWalkers, getCities } from "./database.js"
const walkers = getWalkers()
const cities = getCities()
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    for (const city of cities) {
                        if (walker.cityId === city.id) {
                            window.alert(`${walker.name} services ${city.name}`)

                        }
                    }
                }
            }
        }
    }
)




export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML

}


import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findPetWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}


const findCity = (walker, cityArray) => {
    let currentCity = null
    for (const city of cityArray) {
        if (walker.cityId === city.id) {
            currentCity = city
        }
    }
    return currentCity
}


export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"
    for (const currentPet of pets) {
        const currentPetWalker = findPetWalker(currentPet, walkers)
        const returnedCity = findCity(currentPetWalker, cities)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${returnedCity.name}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}


document.addEventListener('DOMContentLoaded', (event) => {
    fetchHouses();
})

document.addEventListener('click', (event)=> {
    const toggleButton = document.getElementsByClassName('slider round')
})

function fetchHouses(){
    fetch("http://localhost:3000/houses")
        .then (function(response){
            return response.json();
        })
        .then (function(json){
            json.data.forEach(function(houses){
                makeCards(houses)
            })
        })
}

function makeCards(houses){
    // adding houses
    // all constants
    const div = document.querySelector('.house-container')
    const newDiv = document.createElement('div')
    const h3 = document.createElement('h3')
    const characters = houses.attributes.characters

    // attributes 
    newDiv.setAttribute("class", "house-card")

    // appends
    div.appendChild(newDiv)
    newDiv.appendChild(h3)
    
    h3.innerHTML = `<h3>${houses.attributes.name}</h3>`
    
    // adding characters
    characters.forEach(character => {
        const characterDiv = document.createElement('div')
        const p = document.createElement('p')
        const label = document.createElement('label')
        const input = document.createElement('input')
        const span = document.createElement('span')

        label.setAttribute("class", "switch")
        input.setAttribute("type", "checkbox")
        span.setAttribute("class", "slider round")

        if (character.status === true){
            character.status = "alive"
        } else {
            character.status = "deceased"
        }

        p.innerHTML = `<p>${character.name} - ${character.location} - ${character.status}</p>`
        newDiv.appendChild(characterDiv)
        characterDiv.appendChild(p)
        characterDiv.appendChild(label)
        label.appendChild(input)
        label.appendChild(span)

    }) 
}


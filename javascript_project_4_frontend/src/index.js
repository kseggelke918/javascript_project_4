document.addEventListener('DOMContentLoaded', (event) => {
    fetchHouses();
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
    const div = document.querySelector('.house-container')
    const newDiv = document.createElement('div')
    const h3 = document.createElement('h3')
    let characters = houses.attributes.characters
    
    newDiv.setAttribute("class", "house-card")

    div.appendChild(newDiv)
    newDiv.appendChild(h3)
    
    h3.innerHTML = `<h3>${houses.attributes.name}</h3>`

    characters.forEach(character => {
        const characterDiv = document.createElement('div')
        const p = document.createElement('p')
        const label = document.createElement('label')
        const input = document.createElement('input')
        const span = document.createElement('span')
        span.setAttribute("class", "slider round")

        label.setAttribute("class", "switch")
        input.setAttribute("type", "checkbox")
         
        if (character.status === true){
            character.status = "alive"
        } else {
            character.status = "deceased"
        }

        p.innerHTML = `<p>${character.name} - ${character.location} - <span id=${character.id}>${character.status}</span></p>`
        newDiv.appendChild(characterDiv)
        characterDiv.appendChild(p)
        characterDiv.appendChild(label)
        label.appendChild(input)
        label.appendChild(span)

        span.addEventListener('click', (event) => {
            console.log(`this is the event listener - ${character.name}`)
            updateStatus(character)
        })

    }) 
}

function updateStatus(character){  
    console.log(character.status)
    if (character.status === "deceased"){
        let newStatus = true 
        fetchPatchStatus(newStatus, character);
        console.log(`${newStatus} after`)
    } else {
        let newStatus = false 
        fetchPatchStatus(newStatus, character);
        console.log(`${newStatus} after`)
    }
    
}

function fetchPatchStatus(newStatus, character){
    console.log(character)
    fetch(`http://localhost:3000/characters/${character.id}`, {
        method: "PATCH", 
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json", 
        },
        body: JSON.stringify({
            status: newStatus
        })
    })
    .then(response => response.json())
    .then((characterResponse) => {
        console.log(characterResponse)
        updateStatusWord(characterResponse)
    })
}

function updateStatusWord(character){
    let statusSpan = document.getElementById(`${character.data.id}`)
    character.data.attributes.status === true ? statusSpan.innerText = "alive" : statusSpan.innerText = "deceased"
}

class Character {
    constructor(character){
        this.name = character.name
        this.location = character.location
        this.status = character.status
    }
}
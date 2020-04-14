document.addEventListener('DOMContentLoaded', (event) => {
    fetch("http://localhost:3000/houses")
        .then (function(response){
            return response.json();
        })
        .then (function(json){
            json.data.forEach(function(houses){
                makeCards(houses)
            })
        })


function makeCards(houses){
    console.log(houses)
    const div = document.querySelector('.house-container')
    const newDiv = document.createElement('div')
    const h3 = document.createElement('h3')
    const deleteButton = document.createElement('button')
    let characters = houses.attributes.characters
    
    newDiv.setAttribute("class", "house-card")
    deleteButton.setAttribute("class", "delete")
    deleteButton.setAttribute("id", `delete-${houses.id}`)
    deleteButton.setAttribute("value", "delete")
    deleteButton.innerText = "delete"

    div.appendChild(newDiv)
    newDiv.appendChild(h3)
    newDiv.appendChild(deleteButton)
    
    h3.innerHTML = `<h3>${houses.attributes.name}</h3>`

    characters.forEach(character => {
        const characterDiv = document.createElement('div')
        const p = document.createElement('p')
        const label = document.createElement('label')
        const input = document.createElement('input')
        const span = document.createElement('span')
        span.setAttribute("class", "slider round")
        span.setAttribute('id', `toggle-${character.id}`)

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

        listenForToggle(character)

    }) 
}

function listenForToggle(character){
    let span = document.getElementById(`toggle-${character.id}`)
    let newStatus = updateStatus(character)
    span.addEventListener('click', (event) => {
        fetchPatchStatus(newStatus, character)
    })
}

function updateStatus(character){  
    if (character.status === "deceased"){
        return true 
    } else {
        return false
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
    if (character.data.attributes.status === true ){
        statusSpan.innerText = "alive"
    } else {
        statusSpan.innerText = "deceased"
    }
}




class Character {
    constructor(character){
        this.name = character.name
        this.location = character.location
        this.status = character.status
    }
}


})
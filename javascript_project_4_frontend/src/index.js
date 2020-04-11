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
    // debugger 
    // adding houses
    // all constants
    const div = document.querySelector('.house-container')
    const newDiv = document.createElement('div')
    const h3 = document.createElement('h3')
    let characters = houses.attributes.characters
    

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
        span.setAttribute("class", "slider round")
        // const toggleButton = document.querySelector('.slider')

        label.setAttribute("class", "switch")
        input.setAttribute("type", "checkbox")
         
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

        span.addEventListener('click', (event) => {
            console.log(`this is the event listener - ${character.name}`)
            updateStatus(character)
        })

    }) 
}

function updateStatus(event){   
    console.log(event.status)
    let newStatus = !event.status
    console.log(`${newStatus} after`)

    fetch(`http://localhost:3000/characters/${event.id}`, {
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
    .then((houses) => {
        makeCards(houses)
    })
}


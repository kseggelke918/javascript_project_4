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
    console.log(houses)
    const div = document.querySelector('.house-container')
    const newDiv = document.createElement('div')
    newDiv.setAttribute("class", "house-card")
    const h3 = document.createElement('h3')
    h3.innerHTML = `<h3>${houses.attributes.name}</h3>`
    div.appendChild(newDiv)
    newDiv.appendChild(h3)

    

    const characters = houses.relationships.characters.data
    characters.forEach(character => {
        const characterDiv = document.createElement('div')
        characterDiv.setAttribute("class", "character-card")
        const p = document.createElement('p')
        p.innerHTML = `<p>${character.id}</p>`
        newDiv.appendChild(characterDiv)
        characterDiv.appendChild(p)
    })

    // p.innerHTML = `<p>${character.id}</p>`
    
}


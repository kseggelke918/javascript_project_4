document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM has loaded')
    getHouses();
    

})

function makeCards(houses){
    console.log(houses)
    const div = document.querySelector('.house-container')
    const newDiv = document.createElement('div')
    newDiv.setAttribute("class", "house-card")
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${houses.attributes.name}</h2>`
    div.appendChild(newDiv)
    newDiv.appendChild(h2)
}

function getHouses(){
    fetch("http://localhost:3000/houses")
        .then (function(response){
            return response.json();
        })
        .then (function(json){
            // console.log(json.data)
            json.data.forEach(function(houses){
                makeCards(houses)
            })
        })
}


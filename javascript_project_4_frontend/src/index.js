document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM has loaded')
    getHouses();
    

})

function makeCards(houses){
    // DOM Manipulation on the house sent to method
    // DOM Manipulation on each character sent to method
    // want Attribute Name and Motto
    const div = document.querySelector('#house-card')
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${houses.attributes.name}</h2>`
    div.appendChild(h2)
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
            // Iterate through json and call makeCards on each house
            // call makeCards (that will do DOM manipulation)
        })
}


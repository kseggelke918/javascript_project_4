document.addEventListener('DOMContentLoaded', (event) => {
    fetch("http://localhost:3000/houses")
        .then (function(response){
            return response.json();
        })
        .then (function(json){
            json.data.forEach(function(houses){
                // makeCards(houses)
                House.createHouse(houses)
            })
        })


function fetchPatchStatus(newStatus, character){
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
        updateStatusWord(characterResponse)
    })
}

// function deleteFetch(id){
//     fetch(`http://localhost:3000/characters/${id}`, {
//         method: "DELETE", 
//         mode: "cors"
//     }).then (response => response.json())
//     .then((deleteResponse) => {
//         console.log(deleteResponse) 
//     })
// }
})
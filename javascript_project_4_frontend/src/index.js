document.addEventListener('DOMContentLoaded', (event) => {
    fetch("http://localhost:3000/houses")
        .then (function(response){
            return response.json();
        })
        .then (function(json){
            json.data.forEach(function(houses){
                House.createHouse(houses)
            })
        })

})
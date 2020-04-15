class Character {
    constructor(character){
        this.name = character.name
        this.location = character.location
        this.status = character.status
        this.id = character.id
    }

    updateStatusWord(character){
        let statusSpan = document.getElementById(`${character.data.id}`)
        if (character.data.attributes.status === true ){
            statusSpan.innerText = "alive"
        } else {
            statusSpan.innerText = "deceased"
        }
    }

    updateStatus(){  
        if (this.status === "deceased"){
            return true 
        } else {
            return false
        } 
    }

    listenForToggle(){
        let span = document.getElementById(`toggle-${this.id}`)
        let newStatus = this.updateStatus
        span.addEventListener('click', (event) => {
            fetchPatchStatus(newStatus, this)
        })
    }

    deleteEventListener(){
        let deleteCharacter = document.getElementById(`delete-${this.id}`)
        deleteCharacter.addEventListener('click', (event) => {
            this.deleteFetch
            event.target.parentElement.remove();
        })
    }

    deleteFetch(){
        fetch(`http://localhost:3000/characters/${id}`, {
            method: "DELETE", 
            mode: "cors"
        }).then (response => response.json())
        .then((deleteResponse) => {
            console.log(deleteResponse) 
        })
    }

}
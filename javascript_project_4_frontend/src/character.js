class Character {
    constructor(character){
        this.name = character.name
        this.location = character.location
        this.status = character.status
        this.id = character.id
    }

    deleteEventListener(){
        let deleteCharacter = document.getElementById(`delete-${this.id}`)
        deleteCharacter.addEventListener('click', (event) => {
            this.deleteFetch();
            event.target.parentElement.remove();
        })
    }

    deleteFetch(){
        console.log(this)
        fetch(`http://localhost:3000/characters/${character.id}`, {
            method: "DELETE", 
            mode: "cors"
        }).then (response => response.json())
        .then((deleteResponse) => {
            console.log(deleteResponse) 
        })
    }

    fetchPatchStatus(newStatus){
        fetch(`http://localhost:3000/characters/${this.id}`, {
            method: "PATCH", 
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify({
                status: newStatus 
            })
        })
        .then(response => response.json())
        .then((characterResponse) => {
            let updatedCharacter = new Character(characterResponse.data.attributes)
            updatedCharacter.id = characterResponse.data.id
            updatedCharacter.updateStatusWord();
        })
    }

    updateStatusWord(){
        let statusSpan = document.getElementById(`${this.id}`)
        if (this.status === true ){
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
        let newStatus = this.updateStatus();
        span.addEventListener('click', (event) => {
            this.fetchPatchStatus(newStatus)
        })
    }

}
class Character {
    constructor(character){
        this.name = character.name
        this.location = character.location
        this.status = character.status
        this.id = character.id
        this.house_id = character.house_id
    }

    deleteEventListener(){
        let deleteCharacter = document.getElementById(`delete-${this.id}`)
        deleteCharacter.addEventListener('click', (event) => {
            this.deleteFetch();
            event.target.parentElement.remove();
        })
    }

    deleteFetch(){
        fetch(`http://localhost:3000/characters/${this.id}`, {
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
        let aliveCount = document.getElementById(`${this.house_id}`)
        if (this.status === true) {
            aliveCount.innerText = parseInt(aliveCount.innerText) + 1 
            
        } else {
            aliveCount.innerText -= 1
        }
        this.status === true ? statusSpan.innerText = "alive" : statusSpan.innerText = "deceased"
    }

    updateStatus(){  
        this.status === "deceased" ? true : false 
    }

    listenForToggle(){
        let span = document.getElementById(`toggle-${this.id}`)
        let newStatus = this.updateStatus();
        span.addEventListener('click', (event) => {
            this.fetchPatchStatus(newStatus)
        })
    }


}
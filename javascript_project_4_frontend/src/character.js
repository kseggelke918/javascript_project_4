class Character {
    constructor(character){
        this.name = character.name
        this.location = character.location
        this.status = character.status
    }

    updateStatusWord(character){
        let statusSpan = document.getElementById(`${character.data.id}`)
        if (character.data.attributes.status === true ){
            statusSpan.innerText = "alive"
        } else {
            statusSpan.innerText = "deceased"
        }
    }


}
class House {
    constructor(house){
        this.name = house.name 
        this.motto = house.motto
        this.characters = house.characters
    }

    static createHouse(houses){
        const div = document.querySelector('.house-container')
        const newDiv = document.createElement('div')
        const h3 = document.createElement('h3')
        const h4 = document.createElement('h4')
        const deleteButton = document.createElement('button')
        let characters = houses.attributes.characters
    
        newDiv.setAttribute("class", "house-card")

        div.appendChild(newDiv)
        newDiv.appendChild(h3)
        newDiv.appendChild(h4)
    
        h3.innerHTML = `<h3>${houses.attributes.name}</h3>`
        h4.innerHTML = `<h4>${houses.attributes.motto}</h4>`

        characters.forEach(character => {
            const characterDiv = document.createElement('div')
            const p = document.createElement('p')
            const label = document.createElement('label')
            const input = document.createElement('input')
            const span = document.createElement('span')
            const deleteButton = document.createElement('button')
            characterDiv.setAttribute('id', `character-div-${character.id}`)
            span.setAttribute("class", "slider round")
            span.setAttribute('id', `toggle-${character.id}`)

            label.setAttribute("class", "switch")
            input.setAttribute("type", "checkbox")
         
            if (character.status === true){
                character.status = "alive"
            } else {
                character.status = "deceased"
            }

            p.innerHTML = `<p>${character.name} - ${character.location} - <span id=${character.id}>${character.status}</span></p>`
            newDiv.appendChild(characterDiv)
            characterDiv.appendChild(p)
            characterDiv.appendChild(label)
            label.appendChild(input)
            label.appendChild(span)

            deleteButton.setAttribute("class", "delete")
            deleteButton.setAttribute("id", `delete-${character.id}`)
            deleteButton.setAttribute("value", "delete")
            deleteButton.innerText = "delete"
            characterDiv.appendChild(deleteButton)

            let characterObject = new Character(character)
            characterObject.listenForToggle()
            characterObject.deleteEventListener()
        })
    }
}
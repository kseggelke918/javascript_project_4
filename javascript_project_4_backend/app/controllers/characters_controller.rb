class CharactersController < ApplicationController
    def index 
        characters = Character.all
        options = {
            include: [:house]
        } 
        render json: CharacterSerializer.new(characters, options)
    end 

    def update 
        character = Character.find_by(id: params[:id])
        character.update(character_params)
    end 

    private 
    
    def character_params 
        params.require(:character).permit(:status, :location)
    end 

end

class CharactersController < ApplicationController
    def index 
        characters = Character.all
        options = {
            include: [:house]
        } 
        render json: CharacterSerializer.new(characters, options)
    end 
end

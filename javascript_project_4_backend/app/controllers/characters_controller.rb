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
        character.update({status: !character.status})
        options = {
            include: [:house]
        }   
        render json: CharacterSerializer.new(character)
    end 

    def show 
        character = Character.find_by(id: params[:id])
        render json: CharacterSerializer.new(character)
    end 

    def destroy
        character = Character.find_by(id: params[:id])
        character.destroy 
        render json: { message: 'character deleted'}
    end 

end

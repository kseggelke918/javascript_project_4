class CharactersController < ApplicationController
    def index 
        characters = Character.all
        options = {
            include: [:house]
        } 
        render json: CharacterSerializer.new(@@characters, @@options)
    end 

    def update 
        # binding.pry 
        character = Character.find_by(id: params[:id])
        character.update(:status)
        options = {
            include: [:house]
        }   
        # binding.pry 
        render json: CharacterSerializer.new(character)
    end 

    def show 
        character = Character.find_by(id: params[:id])
        render json: CharacterSerializer.new(character)
    end 

    def destroy
        # binding.pry 
        character = Character.find_by(id: params[:id])
        character.destroy 
        render json: { message: 'character deleted'}
    end 

    private 
    
    def character_params 
        params.require(:character).permit(:status, :location)
    end 

end

class CharactersController < ApplicationController
    def index 
        characters = Character.all 
        render json: characters, include: [:name, :status, :location]
    end 
end

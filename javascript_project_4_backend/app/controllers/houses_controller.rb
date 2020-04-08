class HousesController < ApplicationController
    def index 
        houses = House.all 
        render json: houses, include: [:name, :motto]
    end 
end

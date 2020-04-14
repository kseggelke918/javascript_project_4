class HousesController < ApplicationController
    def index 
        houses = House.all 
        options = {
            include: [:characters]
        }
        render json: HouseSerializer.new(houses, options)
    end 
end

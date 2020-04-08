class HousesController < ApplicationController
    def index 
        houses = House.all 
        render json: HouseSerializer.new(houses)
    end 
end

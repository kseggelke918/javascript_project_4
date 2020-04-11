class HousesController < ApplicationController
    def index 
        houses = House.all 
        options = {
            include: [:characters]
        }
        render json: HouseSerializer.new(houses, options)
    end 

    def update 
        house = House.find_by(id: params[:id])
        house.name == "#{house.name} - no living heirs"
    end 
end

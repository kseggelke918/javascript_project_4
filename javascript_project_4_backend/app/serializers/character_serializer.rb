class CharacterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :status, :house_id
  belongs_to :house
end

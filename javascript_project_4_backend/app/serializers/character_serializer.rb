class CharacterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :status
  belongs_to :house
end

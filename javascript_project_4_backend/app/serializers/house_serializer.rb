class HouseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :motto, :characters
  has_many :characters

  


  
end

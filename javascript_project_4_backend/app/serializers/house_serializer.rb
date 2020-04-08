class HouseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :motto
  has_many :characters
end

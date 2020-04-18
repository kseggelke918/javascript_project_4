class HouseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :motto, :characters
  has_many :characters

  # there is some API like this in FastJsonapi that will allow you
  # to create a custom attribute and then you can use a normal AR
  # query (that you can prototype in rails console) to define what 
  # it means

  attribute :alive_count do |house|
    house.characters.where(status: true).count
  end
end

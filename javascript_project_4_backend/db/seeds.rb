# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

houses = House.create([{name: 'House Baratheon', motto: 'Ours is the Fury'}, {name: 'House Greyjoy', motto: 'We Do Not Sow'}, {name: 'House Martell', motto: 'Unbowed, Unbent, Unbroken'}, {name: 'House Stark', motto: 'Winter is Coming'}, {name: 'House Tully', motto: 'Family, Duty, Honor'}, {name: 'House Tyrell', motto: 'Growing Strong'}, {name: 'House Lannister', motto: 'Hear Me Roar!'}, {name: 'House Frey', motto: 'We Stand Together'}, {name: 'House Targaryen', motto: 'Fire and Blood'}, {name: 'House Bolton', motto: 'Our Blades are Sharp'}, {name: 'House Arryn', motto: 'As High as Honor'}])

Character.create(name: 'Eddard Stark', house: houses[3], status: true)
Character.create(name: 'Catelyn Stark', house: houses[3], status: true)
Character.create(name: 'Robb Stark', house: houses[3], status: true)
Character.create(name: 'Sansa Stark', house: houses[3], status: true)
Character.create(name: 'Arya Stark', house: houses[3], status: true)
Character.create(name: 'Bran Stark', house: houses[3], status: true)
Character.create(name: 'Rickon Stark', house: houses[3], status: true)
Character.create(name: 'Benjen Stark', house: houses[3], status: true)
Character.create(name: 'Jon Snow', house: houses[3], status: true)

Character.create(name: 'Tywin Lannister', house: houses[6], status: true)
Character.create(name: 'Cersei Lannister', house: houses[6], status: true)
Character.create(name: 'Jaime Lannister', house: houses[6], status: true)
Character.create(name: 'Tyrion Lannister', house: houses[6], status: true)
Character.create(name: 'Joffrey Baratheon', house: houses[6], status: true)
Character.create(name: 'Myrcella Baratheon', house: houses[6], status: true)
Character.create(name: 'Tommen Baratheon', house: houses[6], status: true)

Character.create(name: 'Robert Baratheon', house: houses[0], status: true)
Character.create(name: 'Stannis Baratheon', house: houses[0], status: true)
Character.create(name: 'Renly Baratheon', house: houses[0], status: true)

Character.create(name: 'Daenerys Targaryen', house: houses[8], status: true)
Character.create(name: 'Viserys Targaryen', house: houses[8], status: true)

Character.create(name: 'Balon Greyjoy', house: houses[1], status: true)
Character.create(name: 'Theon Greyjoy', house: houses[1], status: true)
Character.create(name: 'Asha Greyjoy', house: houses[1], status: true)

Character.create(name: 'Jon Arryn', house: houses[10], status: false)
Character.create(name: 'Lysa Arryn', house: houses[10], status: true)
Character.create(name: 'Robert Arryn', house: houses[10], status: true)

Character.create(name: 'Doran Martell', house: houses[2], status: true)
Character.create(name: 'Oberyn Martell', house: houses[2], status: true)

Character.create(name: 'Hoster Tully', house: houses[4], status: true)
Character.create(name: 'Edmure Tully', house: houses[4], status: true)

Character.create(name: 'Mace Tyrell', house: houses[5], status: true)
Character.create(name: 'Olenna Tyrell', house: houses[5], status: true)
Character.create(name: 'Margaery Tyrell', house: houses[5], status: true)
Character.create(name: 'Loras Tyrell', house: houses[5], status: true)

Character.create(name: 'Roose Bolton', house: houses[9], status: true)
Character.create(name: 'Ramsay Snow', house: houses[9], status: true)
Character.create(name: 'Walda Bolton', house: houses[9], status: true)

Character.create(name: 'Walder Frey', house: houses[7], status: true)
Character.create(name: 'Stevron Frey', house: houses[7], status: true)
Character.create(name: 'Lame Lothar Frey', house: houses[7], status: true)





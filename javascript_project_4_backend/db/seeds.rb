# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

houses = House.create([{name: 'House Baratheon', motto: 'Ours is the Fury'}, {name: 'House Greyjoy', motto: 'We Do Not Sow'}, {name: 'House Martell', motto: 'Unbowed, Unbent, Unbroken'}, {name: 'House Stark', motto: 'Winter is Coming'}, {name: 'House Tully', motto: 'Family, Duty, Honor'}, {name: 'House Tyrell', motto: 'Growing Strong'}, {name: 'House Lannister', motto: 'Hear Me Roar!'}, {name: 'House Frey', motto: 'We Stand Together'}, {name: 'House Targaryen', motto: 'Fire and Blood'}, {name: 'House Bolton', motto: 'Our Blades are Sharp'}, {name: 'House Arryn', motto: 'As High as Honor'}])

Character.create(name: 'Eddard Stark', house_id: 4, status: true, location: 'Westeros')
Character.create(name: 'Catelyn Stark', house_id: 4, status: true, location: 'Westeros')
Character.create(name: 'Robb Stark', house_id: 4, status: true, location: 'Westeros')
Character.create(name: 'Sansa Stark', house_id: 4, status: true, location: 'Westeros')
Character.create(name: 'Arya Stark', house_id: 4, status: true, location: 'Westeros')
Character.create(name: 'Bran Stark', house_id: 4, status: true, location: 'Westeros')
Character.create(name: 'Rickon Stark', house_id: 4, status: true, location: 'Westeros')
Character.create(name: 'Benjen Stark', house_id: 4, status: true, location: 'Westeros')
Character.create(name: 'Jon Snow', house_id: 4, status: true, location: 'Westeros')

Character.create(name: 'Tywin Lannister', house_id: 7, status: true, location: 'Westeros')
Character.create(name: 'Cersei Lannister', house_id: 7, status: true, location: 'Westeros')
Character.create(name: 'Jaime Lannister', house_id: 7, status: true, location: 'Westeros')
Character.create(name: 'Tyrion Lannister', house_id: 7, status: true, location: 'Westeros')
Character.create(name: 'Joffrey Baratheon', house_id: 7, status: true, location: 'Westeros')
Character.create(name: 'Myrcella Baratheon', house_id: 7, status: true, location: 'Westeros')
Character.create(name: 'Tommen Baratheon', house_id: 7, status: true, location: 'Westeros')

Character.create(name: 'Robert Baratheon', house_id: 1, status: true, location: 'Westeros')
Character.create(name: 'Stannis Baratheon', house_id: 1, status: true, location: 'Westeros')
Character.create(name: 'Renly Baratheon', house_id: 1, status: true, location: 'Westeros')

Character.create(name: 'Daenerys Targaryen', house_id: 9, status: true, location: 'Essos')
Character.create(name: 'Viserys Targaryen', house_id: 9, status: true, location: 'Essos')

Character.create(name: 'Balon Greyjoy', house_id: 2, status: true, location: 'Westeros')
Character.create(name: 'Theon Greyjoy', house_id: 2, status: true, location: 'Westeros')
Character.create(name: 'Asha Greyjoy', house_id: 2, status: true, location: 'Westeros')

Character.create(name: 'Jon Arryn', house_id: 11, status: true, location: 'Westeros')
Character.create(name: 'Lysa Arryn', house_id: 11, status: true, location: 'Westeros')
Character.create(name: 'Robert Arryn', house_id: 11, status: true, location: 'Westeros')

Character.create(name: 'Doran Martell', house_id: 3, status: true, location: 'Westeros')
Character.create(name: 'Oberyn Martell', house_id: 3, status: true, location: 'Westeros')

Character.create(name: 'Hoster Tully', house_id: 5, status: true, location: 'Westeros')
Character.create(name: 'Edmure Tully', house_id: 5, status: true, location: 'Westeros')

Character.create(name: 'Mace Tyrell', house_id: 6, status: true, location: 'Westeros')
Character.create(name: 'Olenna Tyrell', house_id: 6, status: true, location: 'Westeros')
Character.create(name: 'Margaery Tyrell', house_id: 6, status: true, location: 'Westeros')
Character.create(name: 'Loras Tyrell', house_id: 6, status: true, location: 'Westeros')

Character.create(name: 'Roose Bolton', house_id: 10, status: true, location: 'Westeros')
Character.create(name: 'Ramsay Snow', house_id: 10, status: true, location: 'Westeros')
Character.create(name: 'Walda Bolton', house_id: 10, status: true, location: 'Westeros')

Character.create(name: 'Walder Frey', house_id: 8, status: true, location: 'Westeros')
Character.create(name: 'Stevron Frey', house_id: 8, status: true, location: 'Westeros')
Character.create(name: 'Lame Lothar Frey', house_id: 8, status: true, location: 'Westeros')





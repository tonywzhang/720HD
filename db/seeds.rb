# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all;
Photo.destroy_all;

user1 = User.create!(username: "guest", email: "guest@guest.com", password: "password")
user2 = User.create!(username: "guest2", email: "guest1@guest.com", password: "password")
tony = User.create!(username: "tony", email: "tony@tony.com", password: "password")


file = File.open('app/assets/images/whistler.jpg')

whistler = Photo.create!(author_id: user1.id, title: "Whistler National Park", description: "Winter Whistler", location: "Whistler, Canada")

whistler.file.attach(io: file, filename: "vc.jpg")


file = File.open('app/assets/images/patagonia.jpg')

pat = Photo.create!(author_id: tony.id, title: "Patagonia", description: "Patagonia in the Winter", location: "Argentina")

pat.file.attach(io: file, filename: "patagonia.jpg")


file = File.open('app/assets/images/ny.jpg')

ny = Photo.create!(author_id: tony.id, title: "New York", description: "Nightshot of NY", location: "New York")

ny.file.attach(io: file, filename: "ny.jpg")


file = File.open('app/assets/images/banff2.jpg')

banff = Photo.create!(author_id: tony.id, title: "Banff National Park", description: "Winter in BNP", location: "Canadia")

banff.file.attach(io: file, filename: "banff2.jpg")



file = File.open('app/assets/images/patagonia2.jpg')

pat2 = Photo.create!(author_id: tony.id, title: "Patagonia", description: "Patagonia Panoramic View", location: "Canada")

pat2.file.attach(io: file, filename: "patagonia2.jpg")



file = File.open('app/assets/images/jasper.jpg')

jnp = Photo.create!(author_id: tony.id, title: "Jasper National Park", description: "Paranoramic View of Jasper", location: "Jasper National Park, Canada")

jnp.file.attach(io: file, filename: "jasper.jpg")



file = File.open('app/assets/images/sunwapta-falls.jpg')

supwap = Photo.create!(author_id: tony.id, title: "Sunwapta Falls", description: "Sunwapta Falls at Jasper National Park", location: "Jasper National Park, Canada")

supwap.file.attach(io: file, filename: "sunwapta-falls.jpg")



file = File.open('app/assets/images/banff1.jpg')

banff1 = Photo.create!(author_id: tony.id, title: "Banff National Park", description: "Spring in Banff", location: "Banff National Park, Canada")

banff1.file.attach(io: file, filename: "banff1.jpg")


file = File.open('app/assets/images/greatsept.jpg')

gs = Photo.create!(author_id: tony.id, title: "The Great Sept", description: "Before Cersei blew it up", location: "King's Landing")

gs.file.attach(io: file, filename: "greatsept.jpg")

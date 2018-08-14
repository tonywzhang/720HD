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


file = File.open('app/assets/images/vc.jpg')

vc = Photo.create!(author_id: tony.id, title: "Vince Carter in 2000", description: "Best Dunker in NBA History", location: "Oracle Arena")

vc.file.attach(io: file, filename: "vc.jpg")


file = File.open('app/assets/images/patagonia.jpg')

pat = Photo.create!(author_id: tony.id, title: "Patagonia", description: "Beautiful Patagonia", location: "Canadia")

pat.file.attach(io: file, filename: "patagonia.jpg")


file = File.open('app/assets/images/prof.jpg')

prof = Photo.create!(author_id: tony.id, title: "Profile Pic", description: "Taken at UCLA", location: "Royce Hall")

prof.file.attach(io: file, filename: "prof.jpg")


file = File.open('app/assets/images/banff2.jpg')

banff = Photo.create!(author_id: tony.id, title: "Banff", description: "Beautiful All New Flowing Fluid", location: "Canadia")

banff.file.attach(io: file, filename: "banff2.jpg")



file = File.open('app/assets/images/patagonia2.jpg')

pat2 = Photo.create!(author_id: tony.id, title: "Patagonia", description: "Gorgeous View", location: "Canadia")

pat2.file.attach(io: file, filename: "patagonia2.jpg")



file = File.open('app/assets/images/steph_bron.png')

sb = Photo.create!(author_id: tony.id, title: "Steph and Bron", description: "2 GOATs", location: "HoF")

sb.file.attach(io: file, filename: "steph_bron.png")



file = File.open('app/assets/images/dwade_bron.jpg')

dlbj = Photo.create!(author_id: tony.id, title: "Robin to Batman", description: "PB&J", location: "Milwaukee")

dlbj.file.attach(io: file, filename: "dwade_bron.jpg")



file = File.open('app/assets/images/banff1.jpg')

banff1 = Photo.create!(author_id: tony.id, title: "Banff", description: "Beautiful All New Flowing Fluid", location: "Canadia")

banff1.file.attach(io: file, filename: "banff1.jpg")

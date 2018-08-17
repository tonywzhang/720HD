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

whistler.file.attach(io: file, filename: "whistler.jpg")

file = File.open('app/assets/images/ny.jpg')

ny = Photo.create!(author_id: user1.id, title: "New York", description: "Nightshot of NY", location: "New York")

ny.file.attach(io: file, filename: "ny.jpg")


file = File.open('app/assets/images/banff2.jpg')

banff = Photo.create!(author_id: user1.id, title: "Banff National Park", description: "Winter in BNP", location: "Canadia")

banff.file.attach(io: file, filename: "banff2.jpg")


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


file = File.open('app/assets/images/acadianp.jpg')

gs = Photo.create!(author_id: tony.id, title: "Acadian National Park", description: "Acadia National Park is a 47,000-acre Atlantic coast recreation area primarily on Maine's Mount Desert Island. ", location: "Maine, United States")

gs.file.attach(io: file, filename: "acadianp.jpg")



file = File.open('app/assets/images/glaciernp.jpg')

gs = Photo.create!(author_id: tony.id, title: "Glacier National Park", description: "Glacier National Park is a 1,583-sq.-mi. wilderness area in Montana's Rocky Mountains, with glacier-carved peaks and valleys running to the Canadian border.", location: "Montana's Rocky Mountain Range")

gs.file.attach(io: file, filename: "glaciernp.jpg")



file = File.open('app/assets/images/yellowstone.jpg')

gs = Photo.create!(author_id: tony.id, title: "Yellowstone National Park", description: "Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot.", location: "Wyoming, United States")

gs.file.attach(io: file, filename: "yellowstone.jpg")


file = File.open('app/assets/images/yellowstonenp.jpg')

gs = Photo.create!(author_id: tony.id, title: "Yellowstone National Park", description: "Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot.", location: "Wyoming, United States")

gs.file.attach(io: file, filename: "yellowstonenp.jpg")


file = File.open('app/assets/images/yosemite1.jpg')

gs = Photo.create!(author_id: tony.id, title: "Yosemite National Park", description: "Yosemite National Park is in California’s Sierra Nevada mountains.", location: "California, United States")

gs.file.attach(io: file, filename: "yosemite1.jpg")


file = File.open('app/assets/images/grandtetonnp.jpg')

gs = Photo.create!(author_id: tony.id, title: "Grand Teton National Park", description: "Grand Teton National Park is in the northwest of the U.S state of Wyoming.", location: "Wyoming, United States")

gs.file.attach(io: file, filename: "grandtetonnp.jpg")



file = File.open('app/assets/images/capecodnationalseashore.jpg')

gs = Photo.create!(author_id: tony.id, title: "Cape Cod National Seashore", description: "The Cape Cod National Seashore, created on August 7, 1961 by President John F. Kennedy, encompasses 43,607 acres on Cape Cod, in Massachusetts.", location: "Massachusetts, United States")

gs.file.attach(io: file, filename: "capecodnationalseashore.jpg")



file = File.open('app/assets/images/denalinp.jpg')

gs = Photo.create!(author_id: tony.id, title: "Denali National Park", description: "Denali National Park and Preserve encompasses 6 million acres of Alaska’s interior wilderness.", location: "Alaska, United States")

gs.file.attach(io: file, filename: "denalinp.jpg")



file = File.open('app/assets/images/waterfall.jpg')

gs = Photo.create!(author_id: tony.id, title: "Unknown Waterfall", description: ".", location: "Unknown location")

gs.file.attach(io: file, filename: "waterfall.jpg")


file = File.open('app/assets/images/grandcanyon.jpg')

gs = Photo.create!(author_id: tony.id, title: "Grand Canyon", description: "Grand Canyon National Park, with its layered bands of red rock revealing millions of years of geological history.", location: "Arizona, United States")

gs.file.attach(io: file, filename: "grandcanyon.jpg")



file = File.open('app/assets/images/nuuksionp.jpg')

gs = Photo.create!(author_id: tony.id, title: "Nuuksio National Park", description: "Nuuksio National Park is one of Finland's 40 national parks.", location: "Finland")

gs.file.attach(io: file, filename: "nuuksionp.jpg")


file = File.open('app/assets/images/grandstaircase.jpg')

gs = Photo.create!(author_id: tony.id, title: "The Grand Staircase", description: "The Grand Staircase-Escalante National Monument is a United States national monument that originally designated 1,880,461 acres of protected land in southern Utah in 1996.", location: "Utah")

gs.file.attach(io: file, filename: "grandstaircase.jpg")



file = File.open('app/assets/images/wulingyuannp.jpg')

gs = Photo.create!(author_id: tony.id, title: "WuLingYuan", description: "Wulingyuan is a scenic and historical site in the Wulingyuan District of south-central China's Hunan Province.", location: "Hunan Province, China")

gs.file.attach(io: file, filename: "wulingyuannp.jpg")

file = File.open('app/assets/images/zionnp2.jpg')

banff = Photo.create!(author_id: tony.id, title: "Zion National Park", description: "Zion National Park is a southwest Utah nature preserve distinguished by Zion Canyon’s steep red cliffs.", location: "Utah")

banff.file.attach(io: file, filename: "zionnp2.jpg")



file = File.open('app/assets/images/yosemite2.jpg')

gs = Photo.create!(author_id: tony.id, title: "Yosemite National Park", description: "Yosemite National Park is in California’s Sierra Nevada mountains.", location: "California, United States")

gs.file.attach(io: file, filename: "yosemite2.jpg")



file = File.open('app/assets/images/banff3.jpg')

banff = Photo.create!(author_id: tony.id, title: "Banff National Park", description: "Winter in BNP", location: "Canadia")

banff.file.attach(io: file, filename: "banff3.jpg")


file = File.open('app/assets/images/zionnp1.jpg')

banff = Photo.create!(author_id: tony.id, title: "Zion National Park", description: "Zion National Park is a southwest Utah nature preserve distinguished by Zion Canyon’s steep red cliffs.", location: "Utah")

banff.file.attach(io: file, filename: "zionnp1.jpg")


file = File.open('app/assets/images/brycecanyonnp.jpg')

banff = Photo.create!(author_id: tony.id, title: "Bryce Canyon National Park", description: "Bryce Canyon National Park, a sprawling reserve in southern Utah, is known for crimson-colored hoodoos, which are spire-shaped rock formations.", location: "Utah")

banff.file.attach(io: file, filename: "brycecanyonnp.jpg")



file = File.open('app/assets/images/archesnp.jpg')

banff = Photo.create!(author_id: tony.id, title: "Arches National Park", description: "Arches National Park lies north of Moab in the state of Utah.", location: "Utah")

banff.file.attach(io: file, filename: "archesnp.jpg")


file = File.open('app/assets/images/zionnp.jpg')

banff = Photo.create!(author_id: tony.id, title: "Zion National Park", description: "Zion National Park is a southwest Utah nature preserve distinguished by Zion Canyon’s steep red cliffs.", location: "Utah")

banff.file.attach(io: file, filename: "zionnp.jpg")




file = File.open('app/assets/images/oulankanp.jpg')

banff = Photo.create!(author_id: tony.id, title: "Oulanka National Park", description: "Oulanka National Park is a national park in the Northern Ostrobothnia and Lapland regions of Finland.", location: "Finland")

banff.file.attach(io: file, filename: "oulankanp.jpg")




file = File.open('app/assets/images/sagarmathanp.jpg')

banff = Photo.create!(author_id: tony.id, title: "Sagarmatha National Park", description: "Sagarmatha National Park is a protected area in the Himalayas of northeast Nepal.", location: "Nepal")

banff.file.attach(io: file, filename: "sagarmathanp.jpg")



file = File.open('app/assets/images/jiuzhaivalleynp.jpg')

banff = Photo.create!(author_id: tony.id, title: "Jiuzhaigou National Park", description: "Jiuzhaigou National Park is a network of valleys in China’s Sichuan province.", location: "Sichuan, China")

banff.file.attach(io: file, filename: "jiuzhaivalleynp.jpg")

file = File.open('app/assets/images/oulanka2.jpg')

banff = Photo.create!(author_id: tony.id, title: "Oulanka National Park", description: "Oulanka National Park is a national park in the Northern Ostrobothnia and Lapland regions of Finland.", location: "Finland")

banff.file.attach(io: file, filename: "oulanka2.jpg")


file = File.open('app/assets/images/seoraksannp.jpg')

banff = Photo.create!(author_id: tony.id, title: "Seoraksan National Park", description: "Seoraksan National Park is a national park in South Korea.", location: "Yangyang-gun, South Korea")

banff.file.attach(io: file, filename: "seoraksannp.jpg")


file = File.open('app/assets/images/lofotennorway.jpg')

banff = Photo.create!(author_id: tony.id, title: "Lofoten", description: "Lofoten is an archipelago in Norway. Its known for its dramatic scenery.", location: "Norway")

banff.file.attach(io: file, filename: "lofotennorway.jpg")


file = File.open('app/assets/images/hallerbosbelgium.jpg')

banff = Photo.create!(author_id: tony.id, title: "The Hallerbos Forest", description: "The Hallerbos is a forest in Belgium, covering an area of 552 ha. It is mostly situated in the municipality of Halle, in Flemish Brabant.", location: "Belgium")

banff.file.attach(io: file, filename: "hallerbosbelgium.jpg")


file = File.open('app/assets/images/tuscanyitaly.jpg')

banff = Photo.create!(author_id: tony.id, title: "The House on a Hill", description: "Tuscany is a region in central Italy.", location: "Tuscany, Italy")

banff.file.attach(io: file, filename: "tuscanyitaly.jpg")


file = File.open('app/assets/images/hallstattaustria.jpg')

banff = Photo.create!(author_id: tony.id, title: "The Floating Village", description: "Hallstatt is a village on Lake Hallstatt's western shore in Austria's mountainous Salzkammergut region.", location: "Hallstatt, Austria")

banff.file.attach(io: file, filename: "hallstattaustria.jpg")


file = File.open('app/assets/images/madeiraislands.jpg')

banff = Photo.create!(author_id: tony.id, title: "The Madeira Islands", description: "Madeira, an autonomous region of Portugal.", location: "Portugal")

banff.file.attach(io: file, filename: "madeiraislands.jpg")


file = File.open('app/assets/images/oulanka1.jpg')

banff = Photo.create!(author_id: tony.id, title: "Oulanka National Park", description: "Oulanka National Park is a national park in the Northern Ostrobothnia and Lapland regions of Finland.", location: "Finland")

banff.file.attach(io: file, filename: "oulanka1.jpg")

file = File.open('app/assets/images/dv.jpg')

banff = Photo.create!(author_id: tony.id, title: "Death Valley", description: "Death Valley is a desert valley located in Eastern California.", location: "Calfornia/Nevada")

banff.file.attach(io: file, filename: "dv.jpg")

Photo.all.each do |photo|
  Like.create!(user_id: user1.id, photo_id: photo.id)
  Like.create!(user_id: user2.id, photo_id: photo.id)
  Like.create!(user_id: tony.id, photo_id: photo.id)
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Pin.destroy_all
Board.destroy_all

user1 = User.create!({ id: 1, email: 'user1@gmail.com', password: 'password123', age: 25})
user2 = User.create!({ id: 2, email: 'user2@gmail.com', password: 'password123', age: 25})
user2 = User.create!({ id: 3, email: 'user3@gmail.com', password: 'password123', age: 25})
user_demo = User.create!({ id: 4, email: 'userdemo@gmail.com', password: 'password123', age: 25 })

pin1 = Pin.new({ id: 1, title: 'snake', description: 'black serpent', creator_id: 2})
file = open('https://pintoit-seeds.s3.amazonaws.com/snake.jpg')
pin1.image.attach(io: file, filename: 'snake.jpg')
pin1.save!

pin2 = Pin.new({ id: 2, title: 'desert sands', description: 'sahara desert', creator_id: 3})
file = open('https://pintoit-seeds.s3.amazonaws.com/desert.jpg')
pin2.image.attach(io: file, filename: 'desert.jpg')
pin2.save!

pin3 = Pin.new({ id: 3, title: 'gothic buttress', description: 'cathedral', creator_id: 1})
file = open('https://pintoit-seeds.s3.amazonaws.com/gothic_buttress.jpg')
pin3.image.attach(io: file, filename: 'gothic_buttress.jpg')
pin3.save!

pin4 = Pin.new({ id: 4, title: 'barcelona', description: 'the streets of barcelona', creator_id: 4})
file = open('https://pintoit-seeds.s3.amazonaws.com/barcelona.jpg')
pin4.image.attach(io: file, filename: 'barcelona.jpg')
pin4.save!

pin5 = Pin.new({ id: 5, title: 'clouds', description: 'colorful clouds', creator_id: 1})
file = open('https://pintoit-seeds.s3.amazonaws.com/clouds.jpg')
pin5.image.attach(io: file, filename: 'clouds.jpg')
pin5.save!

pin6 = Pin.new({ id: 6, title: 'the dead sea', description: 'salty shore', creator_id: 2})
file = open('https://pintoit-seeds.s3.amazonaws.com/dead_sea.jpg')
pin6.image.attach(io: file, filename: 'dead_sea.jpg')
pin6.save!

pin7 = Pin.new({ id: 7, title: 'killer whale', description: 'ocean mammal', creator_id: 4})
file = open('https://pintoit-seeds.s3.amazonaws.com/killer_whale.jpg')
pin7.image.attach(io: file, filename: 'killer_whale.jpg')
pin7.save!

pin8 = Pin.new({ id: 8, title: 'paris', description: 'parisian architecture', creator_id: 3})
file = open('https://pintoit-seeds.s3.amazonaws.com/paris.jpg')
pin8.image.attach(io: file, filename: 'paris.jpg')
pin8.save!

pin9 = Pin.new({ id: 9, title: 'parrot', description: 'exotic bird', creator_id: 1})
file = open('https://pintoit-seeds.s3.amazonaws.com/parrot.jpg')
pin9.image.attach(io: file, filename: 'parrot.jpg')
pin9.save!

pin10 = Pin.new({ id: 10, title: 'sea sunset', description: 'red sunset', creator_id: 3})
file = open('https://pintoit-seeds.s3.amazonaws.com/sea_sunset.jpg')
pin10.image.attach(io: file, filename: 'sea_sunset.jpg')
pin10.save!

pin11 = Pin.new({ id: 11, title: 'bison', description: '', creator_id: 4})
file = open('https://pintoit-seeds.s3.amazonaws.com/bison.jpg')
pin11.image.attach(io: file, filename: 'bison.jpg')
pin11.save!

pin12 = Pin.new({ id: 12, title: 'blue whale', description: '', creator_id: 1})
file = open('https://pintoit-seeds.s3.amazonaws.com/blue_whale.jpg')
pin12.image.attach(io: file, filename: 'blue_whale.jpg')
pin12.save!

pin13 = Pin.new({ id: 13, title: 'monkey', description: '', creator_id: 3})
file = open('https://pintoit-seeds.s3.amazonaws.com/monkey.jpg')
pin13.image.attach(io: file, filename: 'monkey.jpg')
pin13.save!

pin14 = Pin.new({ id: 14, title: 'buildings', description: '', creator_id: 1})
file = open('https://pintoit-seeds.s3.amazonaws.com/building1.jpg')
pin14.image.attach(io: file, filename: 'building1.jpg')
pin14.save!

pin15 = Pin.new({ id: 15, title: 'clown fish', description: '', creator_id: 2})
file = open('https://pintoit-seeds.s3.amazonaws.com/clown_fish.jpg')
pin15.image.attach(io: file, filename: 'clown_fish.jpg')
pin15.save!

pin16 = Pin.new({ id: 16, title: 'door', description: '', creator_id: 1})
file = open('https://pintoit-seeds.s3.amazonaws.com/door.jpg')
pin16.image.attach(io: file, filename: 'door.jpg')
pin16.save!

pin17 = Pin.new({ id: 17, title: 'elephant', description: '', creator_id: 4})
file = open('https://pintoit-seeds.s3.amazonaws.com/elephant.jpg')
pin17.image.attach(io: file, filename: 'elephant.jpg')
pin17.save!

pin18 = Pin.new({ id: 18, title: 'octopus', description: '', creator_id: 3})
file = open('https://pintoit-seeds.s3.amazonaws.com/octopus.jpg')
pin18.image.attach(io: file, filename: 'octopus.jpg')
pin18.save!

pin19 = Pin.new({ id: 19, title: 'mountains', description: '', creator_id: 1})
file = open('https://pintoit-seeds.s3.amazonaws.com/mountains.jpg')
pin19.image.attach(io: file, filename: 'mountains.jpg')
pin19.save!

pin20 = Pin.new({ id: 20, title: 'new york', description: '', creator_id: 2})
file = open('https://pintoit-seeds.s3.amazonaws.com/new_york.jpg')
pin20.image.attach(io: file, filename: 'new_york.jpg')
pin20.save!

pin21 = Pin.new({ id: 21, title: 'waterfall', description: '', creator_id: 3})
file = open('https://pintoit-seeds.s3.amazonaws.com/waterfall.jpg')
pin21.image.attach(io: file, filename: 'waterfall.jpg')
pin21.save!


board1 = Board.create!({ id: 1, title: 'animals', creator_id: 1})
board2 = Board.create!({ id: 2, title: 'nature', creator_id: 2})
board3 = Board.create!({ id: 3, title: 'architecture', creator_id: 3})
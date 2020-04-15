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

pin1 = Pin.create!({ id: 1, title: 'snake', description: 'black snake' creator_id: 2})
file = open('https://pintoit-seeds.s3.amazonaws.com/snake.jpg')
pin1.image.attach(io: file, filename: 'snake.jpg')
pin1.save!

pin2 = Pin.create!({ id: 2, title: 'desert sands', description: 'sahara desert', creator_id: 3})
file = open('https://pintoit-seeds.s3.amazonaws.com/desert.jpg')
pin2.image.attach(io: file, filename: 'desert.jpg')
pin2.save!

pin3 = Pin.create!({ id: 3, title: 'gothic buttress', description: 'cathedral', creator_id: 1})
file = open('https://pintoit-seeds.s3.amazonaws.com/gothic_buttress.jpg')
pin3.image.attach(io: file, filename: 'gothic_buttress.jpg')
pin3.save!

pin4 = Pin.create!({ id: 4, title: 'barcelona', description: 'the streets of barcelona', creator_id: 4})
file = open('https://pintoit-seeds.s3.amazonaws.com/barcelona.jpg')
pin4.image.attach(io: file, filename: 'barcelona.jpg')
pin4.save!

pin5 = Pin.create!({ id: 5, title: 'barcelona', description: 'the streets of barcelona', creator_id: 1})
file = open('https://pintoit-seeds.s3.amazonaws.com/clouds.jpg')
pin5.image.attach(io: file, filename: 'clouds.jpg')
pin5.save!

pin6 = Pin.create!({ id: 6, title: 'barcelona', description: 'the streets of barcelona', creator_id: 2})
file = open('https://pintoit-seeds.s3.amazonaws.com/dead_sea.jpg')
pin6.image.attach(io: file, filename: 'dead_sea.jpg')
pin6.save!

pin7 = Pin.create!({ id: 7, title: 'barcelona', description: 'the streets of barcelona', creator_id: 4})
file = open('https://pintoit-seeds.s3.amazonaws.com/killer_whale.jpg')
pin7.image.attach(io: file, filename: 'killer_whale.jpg')
pin7.save!

pin8 = Pin.create!({ id: 8, title: 'barcelona', description: 'the streets of barcelona', creator_id: 3})
file = open('https://pintoit-seeds.s3.amazonaws.com/paris.jpg')
pin8.image.attach(io: file, filename: 'paris.jpg')
pin8.save!

pin9 = Pin.create!({ id: 9, title: 'barcelona', description: 'the streets of barcelona', creator_id: 1})
file = open('https://pintoit-seeds.s3.amazonaws.com/parrot.jpg')
pin9.image.attach(io: file, filename: 'parrot.jpg')
pin9.save!

pin10 = Pin.create!({ id: 10, title: 'barcelona', description: 'the streets of barcelona', creator_id: 3})
file = open('https://pintoit-seeds.s3.amazonaws.com/sea_sunset.jpg')
pin10.image.attach(io: file, filename: 'sea_sunset.jpg')
pin10.save!

board1 = Board.create!({ id: 1, title: 'animals', creator_id: 1})
board2 = Board.create!({ id: 2, title: 'nature', creator_id: 2})
board3 = Board.create!({ id: 3, title: 'architecture', creator_id: 3})
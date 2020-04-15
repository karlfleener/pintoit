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

pin1 = Pin.create!({ id: 5, title: 'snake', description: 'black snake' creator_id: 2})
file = open('/app/assets/images/pins/snake.jpg')
pin1.image.attach(io: file, filename: 'snake.jpg')
pin1.save!

pin2 = Pin.create!({ id: 6, title: 'desert sands', description: 'sahara desert', creator_id: 3})
file = open('/app/assets/images/pins/desert.jpg')
pin1.image.attach(io: file, filename: 'desert.jpg')
pin1.save!

pin3 = Pin.create!({ id: 7, title: 'gothic buttress', description: 'cathedral', creator_id: 1})
file = open('/app/assets/images/pins/gothic_buttress.jpg')
pin1.image.attach(io: file, filename: 'gothic_buttress.jpg')
pin1.save!

pin4 = Pin.create!({ id: 8, title: 'barcelona', description: 'the streets of barcelona', creator_id: 4})
file = open('/app/assets/images/pins/barcelona.jpg')
pin1.image.attach(io: file, filename: 'barcelona.jpg')
pin1.save!

board1 = Board.create!({ id: 9, title: 'animals', creator_id: 1})
board2 = Board.create!({ id: 10, title: 'nature', creator_id: 2})
board3 = Board.create!({ id: 11, title: 'architecture', creator_id: 3})
board4 = Board.create!({ id: 12, title: 'demo board', creator_id: 4})
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

user_demo = User.create!({ id: 4, email: 'userdemo@gmail.com', password: 'password123', age: 25 })
user1 = User.create!({ id: 1, email: 'user1@gmail.com', password: 'password123', age: 25})
user2 = User.create!({ id: 2, email: 'user2@gmail.com', password: 'password123', age: 25})
user2 = User.create!({ id: 3, email: 'user3@gmail.com', password: 'password123', age: 25})

pin1 = Pin.create!({ id: 4, title: 'parrot', description: 'red parrot', creator_id: 2})
pin2 = Pin.create!({ id: 5, title: 'mountain creek', description: 'beautiful moutain', creator_id: 3})
pin3 = Pin.create!({ id: 6, title: 'structure', description: 'great architecture', creator_id: 1})

board1 = Board.create!({ id: 7, title: 'animals', creator_id: 1})
board3 = Board.create!({ id: 8, title: 'nature', creator_id: 2})
board2 = Board.create!({ id: 9, title: 'architecture', creator_id: 3})
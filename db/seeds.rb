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

demoUser = User.create!({ email: 'userdemo@gmail.com', password: 'password123', age: 25 })
user1 = User.create!({ email: 'user1@gmail.com', password: 'password123', age: 25})
user2 = User.create!({ email: 'user2@gmail.com', password: 'password123', age: 25})
user2 = User.create!({ email: 'user3@gmail.com', password: 'password123', age: 25})

pin1 = Pin.create!({ title: 'parrot', description: 'red parrot', creatorId: 2})
pin2 = Pin.create!({ title: 'mountain creek', description: 'beautiful moutain', creatorId: 3})
pin3 = Pin.create!({ title: 'structure', description: 'great architecture', creatorId: 1})

board1 = Board.create!({ title: 'animals', creatorId: 1})
board3 = Board.create!({ title: 'nature', , creatorId: 2})
board2 = Board.create!({ title: 'architecture', creatorId: 3})
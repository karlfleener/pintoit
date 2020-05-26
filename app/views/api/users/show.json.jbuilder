json.partial! 'api/users/user', user: @user

# json.pins @user.pins.each do |pin|
#   json.set! pin.id do 
#     json.partial! 'api/pins/pin', pin: pin
#   end
# end

# json.boards @user.boards.each do |board|
#   json.set! board.id do 
#     json.partial! 'api/boards/board', board: board
#   end
# end

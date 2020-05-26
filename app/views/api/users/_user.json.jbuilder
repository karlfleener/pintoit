json.extract! @user, :id, :email, :age

json.pins @user.pins.each do |pin|
  json.set! pin.id do 
    # json.partial! 'api/pins/pin', pin: pin
    json.extract! pin, :id, :title, :description, :creator_id, :board_id
    json.imageUrl url_for(pin.image)
  end
end

json.boards @user.boards.each do |board|
  json.set! board.id do 
    # json.partial! 'api/boards/board', board: board
    json.extract! board, :id, :title, :description, :creator_id
    json.pins board.pins.each do |pin|
    json.extract! pin, :id, :title, :description, :creator_id, :board_id
    json.imageUrl url_for(pin.image)
  end
  end
end

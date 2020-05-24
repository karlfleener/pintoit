@boards.each do |board|
  json.set! board.id do
    json.partial! 'api/boards/board', board: board
    json.pins board.pins.each do |pin|
      json.partial! 'api/pins/pin', pin: pin
    end
  end
end

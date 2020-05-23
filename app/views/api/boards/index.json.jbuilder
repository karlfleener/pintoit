@boards.each do |board|
  json.set! board.id do
    json.partial! 'api/boards/board', board: board
    json.pins board.pins
  end
end
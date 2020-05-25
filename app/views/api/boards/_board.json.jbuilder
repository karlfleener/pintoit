json.extract! board, :id, :title, :description, :creator_id
json.pins board.pins.each do |pin|
  json.partial! 'api/pins/pin', pin: pin
end
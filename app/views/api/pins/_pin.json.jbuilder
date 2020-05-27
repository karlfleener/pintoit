json.extract! pin, :id, :title, :description, :creator_id, :board_id, :image
# json.imageFile pin
json.imageUrl url_for(pin.image)
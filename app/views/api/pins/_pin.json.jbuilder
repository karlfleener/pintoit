json.extract! pin, :id, :title, :description, :creator_id, :board_id
json.imageFile pin.image.filename
json.imageUrl url_for(pin.image)
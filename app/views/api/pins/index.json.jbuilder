# @pins.each do |pin|
#   json.set! pin.id do
#     json.partial! 'api/pins/pin', pin: pin
#   end
# end

json.array! @pins do |pin|
  json.partial! 'api/pins/pin', pin: pin
  json.imageUrl url_for(pin.image)
end
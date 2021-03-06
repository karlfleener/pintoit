export const fetchAllPins = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pins'
  })
)

// export const fetchAllUsersPins = userId => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/users/${userId}/pins`
//   })
// )

export const fetchPin = pinId => (
  $.ajax({
    method: 'GET',
    url: `/api/pins/${pinId}`
  })
)

export const createPin = (pin) => (
  $.ajax({
    method: 'POST',
    url: '/api/pins',
    data: pin,
    contentType: false,
    processData: false,
  })
)

export const repinPin = (pinId, formData) => (
  $.ajax({
    method: 'POST',
    url: `/api/pins/${pinId}/repin`,
    data: formData, 
    contentType: false,
    processData: false,
  })
)

export const updatePin = pin => (
  $.ajax({
    method: 'PATCH',
    url: `/api/pins/${pin.id}`,
    data: { pin }
  })
)

export const deletePin = pinId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/pins/${pinId}`
  })
)




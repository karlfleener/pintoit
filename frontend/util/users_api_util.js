export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
)

export const fetchUser = userId => (
  $.ajax({
    method: 'GET', 
    url: `/api/users/${userId}`
  })
)

// export const fetchAllUsersBoards = userId => {
//   return (
//   $.ajax({
//     method: 'GET',
//     url: `/api/users/${userId}/boards`
//   })
// )}

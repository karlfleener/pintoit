## Pintoit

A Pinterest clone that allows users to share and save pins to categorized boards.

Live Site: https://pintoit.herokuapp.com/

## Table of Contents

- [Background and Overview](#background-and-overview)
- [Technologies](#Technologies)
- [Features](#features)
  * [User Authentication](#User-Authentication)
  * [Pins](#Pins)
  * [Boards](#Boards)
  * [Profile](#Profile)
- [Code Highlights](#code-highlights)
- [Future Plans](#future-plans)

## Background and Overview



## Technologies

- React
- Redux
- Javascript
- Ruby on Rails
- PostgreSQL
- AWS photo storage
- HTML
- CSS
- Git

## Features
 
### User Authentication
- Users must login/sign up to use platform
- Demo login available to try out platform

<div>
  <img width="100%" src="/app/assets/images/readme_screenshots/session.gif" alt="create pin gif">
</div>

### Pins
- Users can create/view pins
- Users can edit/delete their own pins
- Pins are organized by boards

<div>
  <img width="100%" src="/app/assets/images/readme_screenshots/create_edit_pin.gif" alt="create pin gif">
</div>

### Boards
- Users can create/view boards
- Users can edit/delete their own boards
- Selecting a board shows all pins associated with it

<div>
  <img width="100%" src="/app/assets/images/readme_screenshots/create_edit_board.gif" alt="create pin gif">
</div>

### Profile
- Users can view/edit/delete their boards/pins

<div>
  <img width="100%" src="/app/assets/images/readme_screenshots/profile.gif" alt="profile gif">
</div>

## Code Highlights
- The majority the forms on Pintoit are implemented using modals. The correct forms are rendered based on switch cases.
```JavaScript
function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'edit-pin':
      component = <PinEditFormContainer />
      break;
    case 'create-board':
      component = <BoardCreateFormContainer />
      break;
    case 'edit-board':
      component = <BoardEditFormContainer />
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}
```



## Future Plans

- allow users to follow each other
- integerate search

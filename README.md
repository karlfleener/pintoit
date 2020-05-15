# Welcome to Pintoit!

Pintoit is a clone of Pinterest that allows users to view and create new pins that they are interested in.

[Pintoit](https://pintoit.herokuapp.com/)

## Technologies
* Ruby on Rails
* Javascript
* React
* Redux
* HTML
* CSS
* Postgres
* AWS photo storage

## Feature Highlights

### Creating Pins

Pins are able to be created through a form where users are able to upload an image, create a name for the pin and describe the pin if they choose to. To access this form, simply click on the + icon in the bottom right corner of every page.

![](https://github.com/karlfleener/pintoit/blob/master/app/assets/images/pins/pin_create.png)

Once a pin has been created the homepage updates and gets populated with pins created from all users.

![](https://github.com/karlfleener/pintoit/blob/master/app/assets/images/pins/homepage.png)

### Editing Pins

When viewing pins, if the user is also the creator the pin, they are allowed permission to edit the title and description or delete the pin all together. To access the edit form click the pencil icon at the top of the pin's show page.

![](https://github.com/karlfleener/pintoit/blob/master/app/assets/images/pins/pin_edit.png)

### Profile

All pins that the user has created are able to be viewed on their profile page.

![](https://github.com/karlfleener/pintoit/blob/master/app/assets/images/pins/profile.png)

### Instructions

Run commands after download
1. bundle install
2. npm install
3. bundle exec rails server
4. npm run webpack

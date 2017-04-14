# Book selling App

This project is an application to simulate book selling functions
Currently this is hosted on github pages

## Functions

The app is based on the original framework format where the front end is still JQuery, HTML, CSS and server side is hapis. 
This requires npm to be installed so please ensure to type 'npm install' in the project directory. 
To run the app, type 'npm start'.
The json data is read and the corressponding data is iterated through to extract main details like book title, description id, etc.
The primary functions include a featured books view and search function where you can search by the OLID or by the book title.
Bootsrap grid classes are also used to make the specific app responsive in all the major breakpoints.
The app is also deployed over the site https://chackop.github.io/

### Future Enhancements

Some of the key enhancements for future iterations include:
Transition to Single Page App using Angular
Use further information from the JSON data for display like ebook
Look into enhancing server side processes using node

# Candidate Exercise

## Requirements

Let's pretend we want to sell books online (like Amazon). As a first step we want to build a site that lists books displaying the book cover image, title, author, open library Id number (OLID), and price.

We'd also like a form that allows us to filter (on the server side) by the book's title or OLID. If searching by OLID we should validate it before we send it to our server. If it's not a valid OLID then we can assume it's a title.

The list of books we want to sell is available here https://goo.gl/Lk2MTJ. There is an example of the API response in the `books.json` file. Note that the API doesn't provide pricing. We'll have to add that later.

Finally, we’d like the front-end to be styled to match the following design. The designer forgot to add the OLID number to the mockup.

![Alt Text](design.jpg)

## What we’re looking for

* Good test coverage
* Clean, well structured code
* Logical approach to implementation
* Appropriate use of third party libs

## What is here

The backend is a simple server running [hapi](https://hapijs.com). The frontend is plain html with jQuery. You can swap out any of these technologies as you see fit.

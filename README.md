# Task Tracker (Back End)

This fullstack web application allows us to keep track of our pending tasks in a simple list, being able to add and delete items as needed. The application makes use of an online database for data persistance and accessibility across different devices, and presents a reactive and reponsive UI.

Note: This is the server-side backend part of the application. For the frontend, visit the following link:

**Link to frontend:** https://github.com/borjaMarti/task-tracker-frontend
**Link to backend:** https://github.com/borjaMarti/task-tracker-backend

---

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React, Vite, Node.js, Express.js, MongoDB, Mongoose

On first use, any items present in the database are loaded into the app.

The user can then, through the user interface, add, delete, and toggle reminders.

All of these actions are passed to and handled by the back-end server, which routes the requests to their respective controller, communicating with MongoDB Atlas through the use of Mongoose schemas to persist the data.

---

## Packages/Dependencies used

connect-mongo, cors, dotenv, express, mongodb, mongoose, morgan, nodemon

---

## Install all the dependencies or node packages used for development via Terminal

`npm install`

---

## Things to add

- Create a `.env` file and add the following as `key: value`
  - PORT: 2121 (can be any port example: 3000)
  - DB_STRING: `your database URI`
  ***

Have fun testing and improving it! 😎

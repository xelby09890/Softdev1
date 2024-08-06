// //setting our view engine
// app.set('view engine', 'ejs');
// app.set('views', './views');

// app.get('/', (req, res) => {
//     const data = {
//         title: "Hello World",
//         message: "Welcome to my website! This is the data for the object"
//     }
//     res.render('index', {data});
// });

// app.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User with ID ${userId}`);
// })

// //Aug 05, 2024
// const express = require('express');
// const ejs = require('ejs');

// //Linking the page route with app.js
// const router = require('./routes/pages'); 

// //Setting up EJS as the view engine
// const app = express();
// const PORT = 3000;

// //implementing routes using middleware
// app.use(router);

// //Starting the server on the specified port.
// app.listen(PORT, () => {
//      console.log(`Server is running on http://localhost:$(PORT)`);
// });

const express = require('express');
const app = express();

const PORT = 3000;
//Query parameters
app.get('/', (req, res) => {
     const id = req.query.id;
     const username = req.query.username;
     //Assuming the user ID and username are required parameters.
     res.send(`User ID: ${id}, Username: ${username}`);
});

app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:$(PORT)`);
});
// //setting our view engine ==========================================================================
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

// //Aug 05, 2024 =====================================================================
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


////Lesson 3 =================================================================================
// //Query parameters
// app.get('/', (req, res) => {
//      const id = req.query.id;
//      const username = req.query.username;
//      //Assuming the user ID and username are required parameters.
//      res.send(`User ID: ${id}, Username: ${username}`);
// });
// //Route parameters
// app.get('/products/:id', (req, res) => {
//      const productId = req.params.id;
//      const products = [
//           {"id": 1, "name": "ProductA"},
//           {"id": 2, "name": "ProductB"},
//           {"id": 3, "name": "ProductC"},
//      ]
//      const product = products.find(product => product.id == parseInt(productId));
//      res.send(`Product id: ${product.id}. Product name: ${product.name}`);
// });

// //August 06, 2024 11:00 ================================================================
// const express = require('express');
// const app = express();

// const PORT = 3000||8000;

// app.use(express.static('public'));

// //middleware
// app.use((req, res, next) => {
//      req.timestamp = Date.now();
//      next();
// });

// //route controller
// app.get('/', (req, res) => {
//      // res.send('Hello there, Red Deer');
//      res.send(`Request timestamp: ${req.timestamp}`);
// });

// app.listen(PORT, () => {
//      console.log(`Server is running on http://localhost: ${PORT}`);
// });

// //August 07, 2024 09:51 =======================================================================
// const express = require('express');
// const app = express();

// const PORT = 3000||8000;

// app.use(express.static('public'));

// //middleware
// app.use((req, res, next) => {
//     console.log(`Request received: ${req.method} ${req.url}`);
//      next();
// });

// //route controller
// app.get('/', (req, res, next) => {
//      try{
//           res.send("Everthing is awesome!").status(200);
//           // throw new Error('Something went wrong');
//      }catch(error){
//           next(error);
//      }
// });

// app.listen(PORT, () => {
//      console.log(`Server is running on http://localhost: ${PORT}`);
// });
// app.use(express.json());


//August 07, 2024 11:51 =======================================================================
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;


//serving static files
app.use(express.static('public'));

//setup our views
app.set('view engine', 'ejs');
app.set('views','./views');

//router handler
app.get('/', (req,res) => {
     res.render('home');
});

app.listen(PORT, () => {
     console.log(`Server is running on http://localhost: ${PORT}`);
});


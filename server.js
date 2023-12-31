// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

//Queries from db
const customersQueries = require('./db/queries/customers');
const ordersQueries = require('./db/queries/orders');
const restaurantsQueries = require('./db/queries/restaurants');
const usersQueries = require('./db/queries/users');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
const session = require('express-session');
//do we need to use Path?

app.use(session({
  // Replace with your desired secret key for session encryption
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

//import routes
const restaurantRoute = require('./routes/restaurants')
const orderRoute = require('./routes/orders')
app.use('/restaurants', restaurantRoute)
app.use('/orders', orderRoute)


// //cookie middleware
// var cookieSession = require('cookie-session')
// app.use(cookieSession({
//   name: 'session',
//   keys: ["key1"],

//   // Cookie Options
//   maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }))

//=====TEMPLATE STUFF - probably not needed=====
// // Separated Routes for each Resource
// // Note: Feel free to replace the example routes below with your own
// const userApiRoutes = require('./routes/users-api');
// const widgetApiRoutes = require('./routes/widgets-api');
// const usersRoutes = require('./routes/users');

// Mount all resource routes
// // Note: Feel free to replace the example routes below with your own
// // Note: Endpoints that return data (eg. JSON) usually start with `/api`
// app.use('/api/users', userApiRoutes);
// app.use('/api/widgets', widgetApiRoutes);
// app.use('/users', usersRoutes);
// // Note: mount other resources here, using the same pattern above
//=====-----=====

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

//redirect from empty directory to restaurants directory
// app.get("/", (req, res) => {
//   console.log("Root Directory! You will be redirected");
//   res.redirect('/restaurants')
// });

// //Homepage for supereats
// app.get('/restaurants', (req, res) => {
//   res.render('index');
// });

// //Move user to Luigi's restaurant
// app.get('/restaurant', (req, res) => {
//   res.render('restaurant');
// });

// //Login
// app.get('/customers/signin/:id', (req, res) => {
//   req.session.user_id = req.params.id;
//   console.log(`User now signed in as user #${req.params.id}`)
//   res.redirect('index');
// });



// Logout function - haven't been able to test yet
// app.post("/logout", (req, res) => {
//   req.session = null
//   res.redirect("index");
// });

// app.get("/restaurants/restaurant/orders", function(req,res){
//   res.render('restaurant_all_orders');
// });

// app.get("/restaurants/orders/:order_id", function(req,res){
//   console.log(`Fetching order details for Order #${req.params.order_id}`)
//   res.render('restaurant_order');
// });
//TODO add post details
//Update order by restaurant - PATCH
//TODO convert to PATCH
// app.post("/restaurants/orders/:order_id", function(req,res){
//   if (!req.session.restaurant_id) {
//     res.status(400).send("User must be logged in to create an order");
//   } else {
//     console.log(req.session.restaurant_id); // Log the POST request body to the console
//     // TODO let restaurant_id = ??? & send order info
//     res.redirect(`/restaurants/orders/${order_id}`);
//   }});


// app.get("/orders/:order_id", function(req,res){
//   console.log(`Fetching order details for Order #${req.params.order_id}`)
//   res.render('client_order');
// });

app.get('/', (req, res) => {
  res.render('index');
});

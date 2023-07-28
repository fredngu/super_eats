const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs");

//App is connected
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

//Placeholder for home, redirects to restaurants directory
app.get("/", (req, res) => {
  console.log("Root Directory!");
  res.redirect('restaurants')
});

//RESTAURANTS
app.get("/restaurants", function(req,res){
  res.send("Calling all restaurants!");
});

app.get("/restaurants/:id", function(req,res){
  let id = 1; //placeholder
  res.send(`The menu for Restaurant ${id}`);
});

app.get("/restaurants/signin/:id", function(req,res){
  let id = 1; //placeholder
  res.send(`This is the individual restaurant page for Restaurant ${id}`);
});


//CUSTOMER SIGN IN
app.get("/customers/signin/:id", function(req,res){
  let id = 1233; //placeholder
  res.send(`Sign in as customer ${id} and set session ID`);
});

//CUSTOMER view of order
app.get("/orders/:id", function(req,res){
  let id = 111; //placeholder
  res.send(`Display contents of order ${id}`);
});

//Create order by Customer
app.post("/orders", (req, res) => {
  if (!req.session.user_id) {
    res.status(400).send("User must be logged in to create an order");
  } else {
    console.log(req.session.user_id); // Log the POST request body to the console
    // TODO let order_id = ??? & send order info
    res.redirect(`/orders/${order_id}`);
  }
});

//Restaurant view of orders
app.get("/restaurants/:restaurant_id/orders", function(req,res){
  let restaurant_id = 0; //placeholder
  res.send(`List of orders for Restaurant ${restaurant_id}`);
});

app.get("/restaurants/orders/:order_id", function(req,res){
  let order_id = 0; //placeholder
  res.send(`Individual order details for order ${order_id}`);
});

//Update order by restaurant - PATCH
//TODO convert to PATCH
app.post("/restaurants/orders/:order_id", function(req,res){
  if (!req.session.restaurant_id) {
    res.status(400).send("User must be logged in to create an order");
  } else {
    console.log(req.session.restaurant_id); // Log the POST request body to the console
    // TODO let restaurant_id = ??? & send order info
    res.redirect(`/restaurants/orders/${order_id}`);
  }});

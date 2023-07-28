const express = require('express');
const router  = express.Router();

const ordersQueries = require('../db/queries/orders');
const restaurantsQueries = require('../db/queries/restaurants');

// Route: GET /restaurants/:restaurant_id/orders - Get all orders for a restaurant
router.get('/:restaurant_id/orders', (req, res) => {
  const restaurantId = req.params.restaurant_id;
  // TODO: create a function to get all orders for a specific restaurant
  ordersQueries.getAllOrdersForRestaurant(restaurantId)
    .then(orders => {
      res.render('restaurant_all_orders', { orders });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

// Route: GET /restaurants - Get all restaurants
router.get('/', (req, res) => {
  restaurantsQueries.getAllRestaurants()
    .then(restaurants => {
      res.render('index', { restaurants });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});


// Route: GET /restaurants/:id - Get a restaurant by id
router.get('/:id', (req, res) => {
  const restaurantId = req.params.id;
  Promise.all([
    restaurantsQueries.getRestaurantById(restaurantId),
    // restaurantsQueries.getMenuItemsForRestaurant(restaurantId)
  ])
    .then(([restaurant, menuItems]) => {
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }
      res.render('restaurant', { restaurant, menuItems });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

// Route: GET /restaurants/signin/:id - Sign in as restaurant, set session ID (then redirect)
router.get('/signin/:id', (req, res) => {
  const restaurantId = req.params.id;
  // TODO: create a function to sign in the restaurant and set session ID
  restaurantsQueries.signInRestaurant(restaurantId, req.session.id)
    .then(restaurant => {
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }
      res.redirect('/'); // Redirect to some page after successful sign-in
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});



// Route: GET /restaurants/:restaurant_id/orders - Get all orders for a restaurant
router.get('/:restaurant_id/orders/:id', (req, res) => {
  const restaurantId = req.params.restaurant_id;
  // TODO: create a function to get all orders for a specific restaurant
  ordersQueries.getAllOrdersForRestaurant(restaurantId)
    .then(orders => {
      res.render('restaurant_order', { orders });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});




module.exports = router;

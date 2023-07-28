
const express = require('express');
const router  = express.Router();

const customersQueries = require('../db/queries/customers');
const ordersQueries = require('../db/queries/orders');

router.get('/signin/:id', (req, res) => {
  const customerId = req.params.id;
  // Assuming you have a function to sign in the customer and set session ID
  customersQueries.signInCustomer(customerId, req.session.id)
    .then(customer => {
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      res.redirect('/'); // Redirect to some page after successful sign-in
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

router.get('/:id', (req, res) => {
  const orderId = req.params.id;
  // TODO: create a function to get an order by its ID
  ordersQueries.getOrderById(orderId)
    .then(order => {
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.render('client_order', { order });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});


router.post('/', (req, res) => {
  const { customerId, smsSent, orderDate, minsTillReady, restaurantId } = req.body;
  // TODO: Create a function to create a new order
  ordersQueries.createOrder(customerId, smsSent, orderDate, minsTillReady, restaurantId)
    .then((newOrder) => {
      // res.json({ newOrder }); IF we want to display the order contents as json
      res.send("Thanks for your order!");
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});


router.post('/:id', (req, res) => {
  const { item1, item2, item3 } = req.body;
  console.log(item1, item2, item3);
  // TODO: Create a function to create a new order
  ordersQueries.createOrder(item1, item2, item3)
    .then((newOrder) => {
      // res.json({ newOrder }); IF we want to display the order contents as json
      console.log(newOrder)
      red.redirect("/:id", {newOrder})
      res.send("Thanks for your order!");
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});


module.exports = router;

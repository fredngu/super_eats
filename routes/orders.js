
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
      let amount;
      res.render('client_order', { amount });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function sendTextMsg(msg){
  client.messages
  .create({
    to: process.env.MY_PHONE_NUMBER,
    from: process.env.MY_TWILIO_NUMBER,
    body: msg
  })
  .then((message) => {
    console.log(message.sid)
  })
  .catch(error => console.log(error))
}

router.post('/sms', (req, res) => {
  const {time} = req.body;
  console.log(time);
  sendTextMsg(`${time}mins til pick up at Luigi's Restaurant`);
  let amount;
  res.render(`client_order`, {amount})
})


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
  const id = req.params.id
  const amount = req.body;
  res.render(`client_order`, {amount})
});


module.exports = router;

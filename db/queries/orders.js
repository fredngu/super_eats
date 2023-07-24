// ordersQueries.js
const db = require('../connection');

// Function to get an order by its ID
const getOrderById = function(id) {
  const queryString = `
    SELECT *
    FROM orders
    WHERE id = $1;
  `;
  const values = [id];

  return db.query(queryString, values).then((res) => res.rows[0] || null);
};

// Function to create a new order
const createOrder = function(customerId, smsSent, orderDate, minsTillReady, restaurantId) {
  const queryString = `
    INSERT INTO orders (customer_id, sms_sent, order_date, mins_till_ready, restaurant_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [customerId, smsSent, orderDate, minsTillReady, restaurantId];

  return db.query(queryString, values).then((res) => res.rows[0]);
};

// Function to get all orders for a specific restaurant
const getAllOrdersForRestaurant = function(restaurantId) {
  const queryString = `
    SELECT *
    FROM orders
    WHERE restaurant_id = $1;
  `;
  const values = [restaurantId];

  return db.query(queryString, values).then((res) => res.rows);
};

// Function to get an order for a specific restaurant by its ID
const getOrderForRestaurantById = function(orderId, restaurantId) {
  const queryString = `
    SELECT *
    FROM orders
    WHERE id = $1 AND restaurant_id = $2;
  `;
  const values = [orderId, restaurantId];

  return db.query(queryString, values).then((res) => res.rows[0] || null);
};

// Function to update an order for a specific restaurant
const updateOrderForRestaurant = function(orderId, restaurantId, newStatus, newTime, newContents) {
  const queryString = `
    UPDATE orders
    SET status = $1, pickup_time = $2, contents = $3
    WHERE id = $4 AND restaurant_id = $5
    RETURNING *;
  `;
  const values = [newStatus, newTime, newContents, orderId, restaurantId];

  return db.query(queryString, values).then((res) => res.rows[0]);
};

module.exports = {
  getOrderById,
  createOrder,
  getAllOrdersForRestaurant,
  getOrderForRestaurantById,
  updateOrderForRestaurant,
};

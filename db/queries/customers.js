// customersQueries.js
const db = require('../connection');

// Function to sign in a customer and set the session ID
const signInCustomer = function(id, sessionID) {
  const queryString = `
    UPDATE customers
    SET session_id = $1
    WHERE id = $2;
  `;
  const values = [sessionID, id];

  return db.query(queryString, values).then(() => {
    // Return the updated customer record
    return getCustomerById(id);
  });
};

// Function to get a customer by their ID
const getCustomerById = function(id) {
  const queryString = `
    SELECT *
    FROM customers
    WHERE id = $1;
  `;
  const values = [id];

  return db.query(queryString, values).then((res) => res.rows[0] || null);
};

module.exports = {
  signInCustomer,
};
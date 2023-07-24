// restaurantsQueries.js
const db = require('../connection');

const getAllRestaurants = function() {
  const queryString = 'SELECT * FROM restaurants;';
  return db.query(queryString).then(data => data.rows);
};

const getRestaurantById = function(id) {
  const queryString = `
    SELECT *
    FROM restaurants
    WHERE id = $1;
  `;
  const values = [id];

  return db.query(queryString, values).then(data => data.rows[0] || null);
};

const signInRestaurant = function(id, sessionID) {
  const queryString = `
    UPDATE restaurants
    SET session_id = $1
    WHERE id = $2;
  `;
  const values = [sessionID, id];

  return db.query(queryString, values).then(() => {
    // Return the updated restaurant record
    return getRestaurantById(id);
  });
};

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  signInRestaurant
};
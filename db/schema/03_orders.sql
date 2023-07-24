-- Drop the orders table if it already exists
DROP TABLE IF EXISTS orders CASCADE;

-- Create the orders table
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  sms_sent BOOLEAN,
  order_date DATE,
  mins_till_ready INTEGER,
  restaurant_id INTEGER REFERENCES restaurants(id)
);

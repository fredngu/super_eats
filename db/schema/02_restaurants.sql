-- Drop the restaurants table if it already exists
DROP TABLE IF EXISTS restaurants CASCADE;

-- Create the restaurants table
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone_number VARCHAR(50) NOT NULL
);

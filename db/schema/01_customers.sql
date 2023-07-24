-- Drop the clients table if it already exists
DROP TABLE IF EXISTS customers CASCADE;

-- Create the customers table
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone_number VARCHAR(50) NOT NULL
);


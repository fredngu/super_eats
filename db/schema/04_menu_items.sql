-- Drop the menu_items table if it already exists
DROP TABLE IF EXISTS menu_items CASCADE;

-- Create the menu_items table
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  description TEXT,
  name VARCHAR(255),
  photo_url VARCHAR(255),
  course VARCHAR(50) NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id)
);
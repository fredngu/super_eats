-- Drop the menu table if it already exists
DROP TABLE IF EXISTS menu_orders CASCADE;

-- Create the menu_orders table
CREATE TABLE menu_orders (
  id SERIAL PRIMARY KEY,
  quantity INTEGER,
  order_id INTEGER REFERENCES orders(id),
  menu_item_id INTEGER REFERENCES menu_items(id)
);

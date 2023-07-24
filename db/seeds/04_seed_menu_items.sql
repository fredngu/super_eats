-- menu_items.sql

-- Insert sample data into the menu_items table (Italian Food Only)
INSERT INTO menu_items (description, name, photo_url, course, restaurant_id)
VALUES
  ('Delicious spaghetti with meatballs', 'Spaghetti with Meatballs', 'https://example.com/spaghetti.jpg', 'Main Course', 1),
  ('Mouthwatering lasagna with cheese', 'Lasagna', 'https://example.com/lasagna.jpg', 'Main Course', 1),
  ('Pizza Margherita', 'Margherita Pizza', 'https://example.com/pizza.jpg', 'Main Course', 2),
  ('Fettuccine Alfredo', 'Fettuccine Alfredo', 'https://example.com/fettuccine.jpg', 'Main Course', 3),
  ('Chicken Parmesan', 'Chicken Parmesan', 'https://example.com/chicken-parmesan.jpg', 'Main Course', 4),
  ('Eggplant Parmesan', 'Eggplant Parmesan', 'https://example.com/eggplant-parmesan.jpg', 'Main Course', 5),
  ('Tiramisu', 'Tiramisu', 'https://example.com/tiramisu.jpg', 'Dessert', 6),
  ('Cannoli', 'Cannoli', 'https://example.com/cannoli.jpg', 'Dessert', 7),
  ('Panna Cotta', 'Panna Cotta', 'https://example.com/panna-cotta.jpg', 'Dessert', 8),
  ('Gelato', 'Gelato', 'https://example.com/gelato.jpg', 'Dessert', 9),
  ('Risotto', 'Risotto', 'https://example.com/risotto.jpg', 'Main Course', 10),
  ('Gnocchi', 'Gnocchi', 'https://example.com/gnocchi.jpg', 'Main Course', 11),
  ('Bruschetta', 'Bruschetta', 'https://example.com/bruschetta.jpg', 'Appetizer', 12),
  ('Caprese Salad', 'Caprese Salad', 'https://example.com/caprese-salad.jpg', 'Appetizer', 13),
  ('Minestrone Soup', 'Minestrone Soup', 'https://example.com/minestrone-soup.jpg', 'Appetizer', 14),
  ('Arancini', 'Arancini', 'https://example.com/arancini.jpg', 'Appetizer', 15),
  ('Panettone', 'Panettone', 'https://example.com/panettone.jpg', 'Dessert', 16),
  ('Pesto Pasta', 'Pesto Pasta', 'https://example.com/pesto-pasta.jpg', 'Main Course', 17),
  ('Calzone', 'Calzone', 'https://example.com/calzone.jpg', 'Main Course', 18),
  ('Limoncello', 'Limoncello', 'https://example.com/limoncello.jpg', 'Dessert', 19),
  ('Cappuccino', 'Cappuccino', 'https://example.com/cappuccino.jpg', 'Beverage', 20);
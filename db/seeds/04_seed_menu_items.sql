-- menu_items.sql

-- Insert sample data into the menu_items table (Italian Food Only)
INSERT INTO menu_items (description, name, photo_url, course, restaurant_id)
VALUES
  ('Delicious spaghetti with meatballs', 'Spaghetti with Meatballs', 'https://www.foodiesfeed.com/wp-content/uploads/2023/07/meatballs.jpg', 'Main Course', 1),
  ('Mouthwatering lasagna with cheese', 'Lasagna', 'https://www.foodiesfeed.com/wp-content/uploads/2015/03/baked-pasta-with-tomatoes-and-cheese.jpg', 'Main Course', 1),
  ('Pizza Margherita', 'Margherita Pizza', 'https://www.foodiesfeed.com/wp-content/uploads/2015/03/basic-italian-pizza-margherita.jpg', 'Main Course', 2),
  ('Fettuccine Alfredo', 'Fettuccine Alfredo', 'https://www.foodiesfeed.com/wp-content/uploads/2020/05/pasta-tomatoes-and-other-italian-ingredients-1.jpg', 'Main Course', 3),
  ('Chicken Parmesan', 'Chicken Parmesan', 'https://www.foodiesfeed.com/wp-content/uploads/2016/03/chicken-breast-with-spinach-and-potato-gnocchi-1.jpg', 'Main Course', 4),
  ('Eggplant Parmesan', 'Eggplant Parmesan', 'https://www.foodiesfeed.com/wp-content/uploads/2020/06/cannelloni-de-beringela.jpg', 'Main Course', 5),
  ('Tiramisu', 'Tiramisu', 'https://www.foodiesfeed.com/wp-content/uploads/2016/03/fancy-ice-cream-dessert.jpg', 'Dessert', 6),
  ('Cannoli', 'Cannoli', 'https://www.foodiesfeed.com/wp-content/uploads/2019/09/homemade-cannoli-without-wine.jpg', 'Dessert', 7),
  ('Panna Cotta', 'Panna Cotta', 'https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-with-ricotta-cheese-close-up.jpg', 'Dessert', 8),
  ('Gelato', 'Gelato', 'https://www.foodiesfeed.com/wp-content/uploads/2020/08/pandan-ice-cream.jpg', 'Dessert', 9),
  ('Risotto', 'Risotto', 'https://www.foodiesfeed.com/wp-content/uploads/2015/04/chilli-risotto-with-shrimps.jpg', 'Main Course', 10),
  ('Gnocchi', 'Gnocchi', 'https://www.foodiesfeed.com/wp-content/uploads/2015/05/gnocchi-with-butter-and-sage.jpg', 'Main Course', 11),
  ('Bruschetta', 'Bruschetta', 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/open-sandwich-with-salmon-cream-avocado.jpg', 'Appetizer', 12),
  ('Caprese Salad', 'Caprese Salad', 'https://www.foodiesfeed.com/wp-content/uploads/2017/07/spinach-pomegranate-and-chicken-salad.jpg', 'Appetizer', 13),
  ('Minestrone Soup', 'Minestrone Soup', 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/minestrone-soup.jpg', 'Appetizer', 14),
  ('Arancini', 'Arancini', 'https://www.foodiesfeed.com/wp-content/uploads/2019/02/the-best-russian-borscht.jpg', 'Appetizer', 15),
  ('Panettone', 'Panettone', 'https://www.foodiesfeed.com/wp-content/uploads/2015/09/perfect-wholegrain-bread.jpg', 'Dessert', 16),
  ('Pesto Pasta', 'Pesto Pasta', 'https://www.foodiesfeed.com/wp-content/uploads/2015/03/baked-pasta-with-tomatoes-and-cheese.jpg', 'Main Course', 17),
  ('Calzone', 'Calzone', 'https://www.foodiesfeed.com/wp-content/uploads/2020/05/pasta-tomatoes-and-other-italian-ingredients-1.jpg', 'Main Course', 18),
  ('Limoncello', 'Limoncello', 'https://www.foodiesfeed.com/wp-content/uploads/2022/11/fancy-dessert-with-biscuit-on-top.jpg', 'Dessert', 19),
  ('Cappuccino', 'Cappuccino', 'https://www.foodiesfeed.com/wp-content/uploads/2019/01/dreamy-flatwhite-coffee-with-perfect-latte-art-2.jpg', 'Beverage', 20);



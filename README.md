# Supereats
=========

# SuperEats - Food Pickup Application

![SuperEats Logo](https://yourdomain.com/logo.png)

SuperEats is a food delivery application that allows customers to order delicious food from their favorite restaurants and have it ready for pickup. With an easy-to-use interface and a wide selection of restaurants and menu items, SuperEats provides a seamless food ordering experience. is part of LightHouse Labs Bootcamp.

## Authors
![Glauber Marques](https://github.com/glaubervilane.png)
![Paul McAllister](https://github.com/pmcall.png) 
![Frederik Nguyen](https://github.com/fredngu.png)

## Features

- Browse a variety of menu items
- Place orders for pickup
- View order status and estimated delivery time
- Sign in as a customer or restaurant owner
- View order history and manage account settings

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/supereats.git
   cd supereats
   
2. Install the required dependencies:

  ```bash
  npm install

3. Set up the database:

  - Create a PostgreSQL database and update the connection settings in db.js file.
  - Run the database migration to create tables:
  ```bash
  npm run migrate

4. Start the server:

  ``bash
  npm start

5. Open your browser and visit http://localhost:8080 to access the application.

## Usage

1. Browse the list of restaurants and their menu items.
2. Click on a restaurant to view its menu and additional details.
3. Add items to your cart and proceed to checkout.
4. Choose the delivery or pickup option and provide the necessary details.
5. Confirm your order and make the payment.
6. Track the status of your order and view estimated delivery time.
7. Enjoy your delicious meal!

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- EJS (Embedded JavaScript) templating engine
- HTML, CSS, JavaScript
- NPM (Node Package Manager)

## API Endpoints

- GET /restaurants: Get a list of all restaurants.
- GET /restaurants/:id: Get details of a specific restaurant and its menu items.
- POST /restaurants/signin/:id: Sign in as a restaurant and set the session ID.
- GET /customers/signin/:id: Sign in as a customer and set the session ID.
- GET /orders/:id: Get details of an order by order ID (for customers).
- POST /orders: Create a new order.
- GET /restaurants/:restaurant_id/orders: Get all orders for a restaurant.
- GET /restaurants/orders/:order_id: Get details of an order for a restaurant.
- PATCH /restaurants/orders/:order_id: Update order status/time/contents by the restaurant.

## Contributing

We welcome contributions from the community! If you have any suggestions, bug fixes, or new features to add, please feel free to submit a pull request.

1. Fork the repository.
2. Create your feature branch: git checkout -b feature/your-feature.
3. Commit your changes: git commit -m 'Add some feature'.
4. Push to the branch: git push origin feature/your-feature.
5. Open a pull request.

## License

This project is licensed under the MIT License. Feel free to use and modify the code as per the terms of the license.


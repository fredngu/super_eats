const restaurantObj = [
  {
    name: "Luigi's Restaurant",
    image: "images/pasta.jpg",
    description: "A culinary journey to Italy. Enjoy authentic flavors, handcrafted pasta, wood-fired pizza, and a delightful selection of Italian wines. Our warm hospitality and rustic ambiance complete the experience. Buon Appetito!",
  },
  {
    name: "Dragon Wok Garden",
    image: "images/wok.jpg",
    description: "The sizzle of the wok and the aroma of authentic Chinese cuisine fill the air. Discover a symphony of bold flavors and fresh ingredients as our skilled chefs craft delectable stir-fries, noodles, and rice dishes right before your eyes."
  },
  {
    name: "Smokehouse Grill",
    image: "images/grill.jpg",
    description: "Smokehouse Grill, where the art of smoking meats meets culinary excellence. Indulge in a tantalizing fusion of smoky flavors, perfectly grilled meats, and savory barbecue classics."
  }];

const loadRestaurant = (restaurant) => {
  let $restaurantSection = (
    `
    <article class="restaurants">
      <div><h2>${restaurant.name}</h2></div>
      <div><img src=${restaurant.image}></div>
      <div><p class="restaurant-description">${restaurant.description}</p></div>
      <form method="GET" action="/restaurants/1">
        <button class="btn btn-success btn-lg">View Menu</button>
      </form>
    </article>
    `
  );
  return $restaurantSection;
};

$(document).ready(function() {
  for (const restaurant of restaurantObj) {
    $('#restaurant-containers').append(loadRestaurant(restaurant));
  }
});


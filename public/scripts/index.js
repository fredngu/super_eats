const loadRestaurant = () => {
  let $restaurant = (
    `
    <article class="restaurants">
      <div><h2>Luigi's Restaurant</h2></div>
      <div><img src="images/pasta.jpg"></div>
      <div><p class="restaurant-description">A culinary journey to Italy. Enjoy authentic flavors, handcrafted pasta, wood-fired pizza, and a delightful selection of Italian wines. Our warm hospitality and rustic ambiance complete the experience. Buon Appetito!"</p></div>
      <form method="GET" action="/restaurants">
        <button class="menu-items">View Menu</button>
      </form>
    </article>
    <article class="restaurants">
      <div><h2>Dragon Wok Garden</h2></div>
      <div><img src="images/wok.jpg"></div>
      <div><p class="restaurant-description">The sizzle of the wok and the aroma of authentic Chinese cuisine fill the air. Discover a symphony of bold flavors and fresh ingredients as our skilled chefs craft delectable stir-fries, noodles, and rice dishes right before your eyes.</p></div>
      <form method="GET" action="/restaurants">
        <button class="menu-items">View Menu</button>
      </form>
    </article>
    <article class="restaurants">
      <div><h2>Smokehouse Grill</h2></div>
      <div><img src="images/grill.jpg"></div>
      <div><p class="restaurant-description">Smokehouse Grill, where the art of smoking meats meets culinary excellence. Indulge in a tantalizing fusion of smoky flavors, perfectly grilled meats, and savory barbecue classics. Our passion for quality ingredients and slow-cooked perfection shines in every dish, offering a delightful feast for your senses.</p></div>
      <form method="GET" action='/restaurants'>
        <button class="menu-items">View Menu</button>
      </form>
    </article>
    `
  )
  return $restaurant
}

$(document).ready(function() {
  $('#restaurant-containers').append(loadRestaurant());

})

console.log("hello world")

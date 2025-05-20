const Restaurants = require("../service/restaurantService");

const restaurants = new Restaurants();

const fetchAllRestaurantsHandler = (req, res) => {
  if (req.method === "GET") {
    try {
      const allRestaurants = restaurants.getAllRestaurants();
      res.writeHead(200, { "Content-Type": "application/json" });
      console.log(`${new Date()} - API called for fetching all restaurants`);
      res.end(JSON.stringify(allRestaurants));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      console.error(`${new Date()} - Error fetching restaurants:`, error);
      res.end(JSON.stringify({ error: "Internal Server Error" }));
    }
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    console.log(`${new Date()} - Method not allowed`);
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
};

const fetchRestaurantByIdHandler = (req, res, restaurantId) => {
  if (req.method === "GET") {
    try {
      const restaurant = restaurants.getRestaurantById(restaurantId);
      console.log(
        `${new Date()} - API called for fetching restaurant using the provided id`
      );

      if (!restaurant) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            error: `Restaurant with id ${restaurantId} was not found`,
          })
        );
        return;
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(restaurant));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      console.error(`${new Date()} - Error fetching restaurant:`, error);
      res.end(JSON.stringify({ error: "Internal Server Error" }));
    }
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    console.log(`${new Date()} - Method not allowed`);
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
};

const fetchAllRestaurantsByCategoryHandler = (req, res, category) => {
  if (req.method === "GET") {
    try {
      const categoryRestaurants = restaurants.getAllRestaurantsByCategory(category);
      res.writeHead(200, { "Content-Type": "application/json" });
      console.log(
        `${new Date()} - API called for fetching all restaurants by category`
      );
      res.end(JSON.stringify(categoryRestaurants || []));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      console.error(
        `${new Date()} - Error fetching restaurants by category:`,
        error
      );
      res.end(JSON.stringify({ error: "Internal Server Error" }));
    }
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    console.log(`${new Date()} - Method not allowed`);
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
};

const fetchAllRestaurantsByCuisineHandler = (req, res, cuisine) => {
  if (req.method === "GET") {
    try {
      const cuisineRestaurants = restaurants.getAllRestaurantsByCuisine(cuisine);
      res.writeHead(200, { "Content-Type": "application/json" });
      console.log(
        `${new Date()} - API called for fetching all restaurants by cuisine`
      );
      res.end(JSON.stringify(cuisineRestaurants || []));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      console.error(
        `${new Date()} - Error fetching restaurants by cuisine:`,
        error
      );
      res.end(JSON.stringify({ error: "Internal Server Error" }));
    }
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    console.log(`${new Date()} - Method not allowed`);
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
};

module.exports = {
  fetchAllRestaurantsHandler,
  fetchRestaurantByIdHandler,
  fetchAllRestaurantsByCategoryHandler,
  fetchAllRestaurantsByCuisineHandler,
};

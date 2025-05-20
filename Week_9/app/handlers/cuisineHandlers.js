const Cuisines = require("../service/cuisineService");

const cuisines = new Cuisines();

const fetchAllCuisinesHandler = (req, res) => {
  if (req.method === 'GET') {
    try {
      const allCuisines = cuisines.getAllCuisines();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(allCuisines));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
};

const fetchCuisineByIdHandler = (req, res, cuisineId) => {
  if (req.method === 'GET') {
    try {
      const cuisine = cuisines.getCuisineById(cuisineId);
      if (cuisine) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(cuisine));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Cuisine not found' }));
      }
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
};

const fetchCuisineByNameHandler = (req, res, cuisineName) => {
  if (req.method === 'GET') {
    try {
      const cuisine = cuisines.getCuisineByName(cuisineName);
      if (cuisine) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(cuisine));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Cuisine not found' }));
      }
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
};

module.exports = {
  fetchAllCuisinesHandler,
  fetchCuisineByIdHandler,
  fetchCuisineByNameHandler
};

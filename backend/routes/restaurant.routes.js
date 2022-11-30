module.exports = app => {
    const restaurants = require("../controllers/restaurant.controller");
    var upload = require('../multer/upload');
  
    var router = require("express").Router();
  
    // Create a new Restaurant
    router.post("/", upload.single('file'), restaurants.create);

    // Retrieve all Restaurants
    router.get("/", restaurants.findAll);
  
    // Retrieve a single Restaurant with id
    router.get("/:id", restaurants.findOne);
  
    // Update a Restaurant with id
    router.put("/:id", upload.single('file'), restaurants.update);
  
    // Delete a Restaurant with id
    router.delete("/:id", restaurants.delete);
  
    app.use("/api/restaurants", router);
  }
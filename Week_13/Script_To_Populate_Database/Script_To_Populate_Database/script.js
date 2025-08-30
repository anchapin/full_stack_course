const mongoose = require("mongoose");
const fs = require("fs");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/food_order_app")
  .then(() => {
    console.log("Connected to MongoDB");
    // Call function to insert all data once connected
    insertAllData();
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Async Function to Insert multiple
async function insertData(schemaModel, jsonFile) {
  try {
    // Load JSON data from the file
    const jsonData = JSON.parse(fs.readFileSync(jsonFile));

    // Insert data into the collection using insertMany
    await schemaModel.insertMany(jsonData);
    console.log(`Data from "${jsonFile}" inserted successfully!`);
  } catch (err) {
    console.error(`Error inserting data from "${jsonFile}":`, err);
  }
}

//User Schema
const userSchema = mongoose.Schema({
  id: { type: String, required: true },
  userName: { type: String, required: true },
  fullName: { type: String, required: true },
  emailId: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  isActive: { type: Boolean, default: true },
  createdTs: { type: Date, default: new Date() },
  updatedTs: { type: Date, default: new Date() },
});
const userModel = mongoose.model("users", userSchema);

// User Session Schema
const userSessionSchema = mongoose.Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  sessionToken: { type: String, default: null },
  isActive: { type: Boolean, default: true },
  createdTs: { type: Date, default: new Date() },
  updatedTs: { type: Date, default: new Date() },
});
const userSessionModel = mongoose.model("userSessions", userSessionSchema);

// Category Schema
const categorySchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdTs: { type: Date, default: new Date() },
  updatedTs: { type: Date, default: new Date() },
});

const categoryModel = mongoose.model("categories", categorySchema);

// Cuiisne Schema
const cuisineSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdTs: { type: Date, default: new Date() },
  updatedTs: { type: Date, default: new Date() },
});

const cuisineModel = mongoose.model("cuisines", cuisineSchema);

// Food Item Schema
const foodItemSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  categoryId: { type: String, required: true },
  cuisineId: { type: String, required: true },
  isVeg: { type: Boolean, required: true },
  isActive: { type: Boolean, default: true },
  createdTs: { type: Date, default: new Date() },
  updatedTs: { type: Date, default: new Date() },
});

const foodItemsModel = mongoose.model("foodItems", foodItemSchema);

// Cart Schema
const cartSchema = mongoose.Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  restaurantId: { type: String, required: true },
  orderTotalPrice: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  createdTs: { type: Date, default: new Date() },
  updatedTs: { type: Date, default: new Date() },
});

const cartModel = mongoose.model("carts", cartSchema);

// Cart Item Schema
const cartItemSchema = mongoose.Schema({
  id: { type: String, required: true },
  cartId: { type: String, required: true },
  fooditemId: { type: String, required: true },
  fooditemPrice: { type: Number, required: true },
  unitsInCart: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  createdTs: { type: Date, default: new Date() },
  updatedTs: { type: Date, default: new Date() },
});

const cartItemModel = mongoose.model("cartItems", cartItemSchema);

// Order Schema
const orderSchema = mongoose.Schema({
  id: { type: String, require: true },
  userId: { type: String, required: true },
  restaurantId: { type: String, required: true },
  orderTotalPrice: { type: Number, required: true },
  shippingDetailsId: { type: String, required: true },
  orderStatus: { type: String },
  isActive: { type: Boolean, default: true },
  createdTs: { type: Date, default: new Date() },
  updatedTs: { type: Date, default: new Date() },
});

const orderModel = mongoose.model("orders", orderSchema);

// Order Item Schema
const orderItemSchema = mongoose.Schema({
  id: { type: String, required: true },
  orderId: { type: String, required: true },
  fooditemId: { type: String, required: true },
  fooditemPrice: { type: Number, required: true },
  unitsPurchased: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  createdTs: { type: Date, default: new Date() },
  updatedTs: { type: Date, default: new Date() },
});

const orderItemModel = mongoose.model("orderItems", orderItemSchema);

// Shipping Details Schema
const shippingDetailsSchema = mongoose.Schema({
  id: { type: String, require: true },
  shippingAddress: { type: String, required: true },
  emailId: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  createdTs: { type: Date, default: new Date() },
  updatedTs: { type: Date, default: new Date() },
});

const shippingDetailsModel = mongoose.model(
  "shippingDetails",
  shippingDetailsSchema
);

// Restaurant Schema
const restaurantSchema = mongoose.Schema({
  id: { type: String, require: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: Number, required: true },
  image: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdTs: { type: Date, default: new Date() },
  updatedTs: { type: Date, default: new Date() },
});

const restaurantModel = mongoose.model("restaurants", restaurantSchema);

// Menu Schema
const menuSchema = mongoose.Schema({
  id: { type: String, required: true },
  restaurantId: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdTs: { type: Date, default: new Date() },
  updatedTs: { type: Date, default: new Date() },
});

const menuModel = mongoose.model("menus", menuSchema);

// Menu Item Schema
const menuItemSchema = mongoose.Schema({
  id: { type: String, required: true },
  menuId: { type: String, required: true },
  fooditemId: { type: String, required: true },
  fooditemPrice: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  createdTs: { type: Date, default: new Date() },
  updatedTs: { type: Date, default: new Date() },
});

const menuItemModel = mongoose.model("menuItems", menuItemSchema);

async function insertAllData() {
  try {
    await insertData(userModel, "data/users.json");
    await insertData(userSessionModel, "data/userSessions.json");
    await insertData(categoryModel, "data/categories.json");
    await insertData(cuisineModel, "data/cuisines.json");
    await insertData(menuModel, "data/menus.json");
    await insertData(menuItemModel, "data/menuItems.json");
    await insertData(orderModel, "data/orders.json");
    await insertData(orderItemModel, "data/orderItems.json");
    await insertData(restaurantModel, "data/restaurants.json");
    await insertData(shippingDetailsModel, "data/shippingDetails.json");
    await insertData(foodItemsModel, "data/foodItems.json");
    await insertData(cartModel, "data/carts.json");
    await insertData(cartItemModel, "data/cartItems.json");
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
    console.log("Connection closed");
  }
}

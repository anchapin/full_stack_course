/* global use, db */
// NoSQL Assessment - Food Order App Database Queries
// MongoDB Playground for comprehensive database operations

// Select the database to use
use('food_order_app');

// ============================================================================
// SECTION 1: DATABASE OVERVIEW & COLLECTION INSPECTION
// ============================================================================

console.log("=== DATABASE OVERVIEW ===");

// Show collection names by querying each one
console.log("Collections in food_order_app:");
console.log("Available collections: users, categories, cuisines, restaurants, foodItems, menus, menuItems, carts, cartItems, orders, orderItems, userSessions, shippingDetails");

// Get collection counts instead of db stats
console.log("Collection Document Counts:");
console.log("Users:", db.users.countDocuments());
console.log("Categories:", db.categories.countDocuments());
console.log("Cuisines:", db.cuisines.countDocuments());
console.log("Restaurants:", db.restaurants.countDocuments());
console.log("Food Items:", db.foodItems.countDocuments());

// ============================================================================
// SECTION 2: BASIC FIND OPERATIONS
// ============================================================================

console.log("\n=== BASIC FIND OPERATIONS ===");

// 1. View all users
console.log("All Users:");
db.users.find();

// 2. View all categories
console.log("All Categories:");
db.categories.find();

// 3. View all cuisines
console.log("All Cuisines:");
db.cuisines.find();

// 4. View all restaurants
console.log("All Restaurants:");
db.restaurants.find();

// ============================================================================
// SECTION 3: FILTERED QUERIES
// ============================================================================

console.log("\n=== FILTERED QUERIES ===");

// 1. Find admin users only
console.log("Admin Users:");
db.users.find({ "isAdmin": true });

// 2. Find active users only
console.log("Active Users:");
db.users.find({ "isActive": true });

// 3. Find vegetarian food items
console.log("Vegetarian Food Items:");
db.foodItems.find({ "isVeg": true });

// 4. Find non-vegetarian food items
console.log("Non-Vegetarian Food Items:");
db.foodItems.find({ "isVeg": false });

// 5. Find active food items
console.log("Active Food Items:");
db.foodItems.find({ "isActive": true });

// ============================================================================
// SECTION 4: PROJECTION QUERIES (Specific Fields)
// ============================================================================

console.log("\n=== PROJECTION QUERIES ===");

// 1. Get only usernames and emails
console.log("User Names and Emails:");
db.users.find({}, { "userName": 1, "emailId": 1, "_id": 0 });

// 2. Get food item names and categories
console.log("Food Item Names and Categories:");
db.foodItems.find({}, { "name": 1, "categoryId": 1, "_id": 0 });

// 3. Get restaurant names and addresses
console.log("Restaurant Names and Addresses:");
db.restaurants.find({}, { "name": 1, "address": 1, "_id": 0 });

// ============================================================================
// SECTION 5: COUNT OPERATIONS
// ============================================================================

console.log("\n=== COUNT OPERATIONS ===");

// 1. Count total users
console.log("Total Users:", db.users.countDocuments());

// 2. Count admin users
console.log("Admin Users:", db.users.countDocuments({ "isAdmin": true }));

// 3. Count vegetarian food items
console.log("Vegetarian Food Items:", db.foodItems.countDocuments({ "isVeg": true }));

// 4. Count active food items
console.log("Active Food Items:", db.foodItems.countDocuments({ "isActive": true }));

// 5. Count total restaurants
console.log("Total Restaurants:", db.restaurants.countDocuments());

// ============================================================================
// SECTION 6: SORTING AND LIMITING
// ============================================================================

console.log("\n=== SORTING AND LIMITING ===");

// 1. Get first 3 users sorted by username
console.log("First 3 Users (sorted by username):");
db.users.find({}, { "userName": 1, "fullName": 1 }).sort({ "userName": 1 }).limit(3);

// 2. Get food items sorted by name
console.log("Food Items (sorted by name):");
db.foodItems.find({}, { "name": 1, "isVeg": 1 }).sort({ "name": 1 });

// ============================================================================
// SECTION 7: RELATIONSHIP QUERIES
// ============================================================================

console.log("\n=== RELATIONSHIP QUERIES ===");

// 1. Find food items for a specific category
console.log("Food Items in Category 1:");
db.foodItems.find({ "categoryId": "1" });

// 2. Find food items for a specific cuisine
console.log("Food Items in Cuisine 1:");
db.foodItems.find({ "cuisineId": "1" });

// 3. Find menus for a specific restaurant
console.log("Menus for Restaurant 1:");
db.menus.find({ "restaurantId": "1" });

// 4. Find menu items for a specific menu
console.log("Menu Items for Menu 1:");
db.menuItems.find({ "menuId": "1" });

// 5. Find carts for a specific user
console.log("Carts for User 1:");
db.carts.find({ "userId": "1" });

// ============================================================================
// SECTION 8: ADVANCED QUERIES
// ============================================================================

console.log("\n=== ADVANCED QUERIES ===");

// 1. Find users with specific email domain
console.log("Users with @example.com emails:");
db.users.find({ "emailId": /example\.com$/ });

// 2. Find food items that are both vegetarian and active
console.log("Active Vegetarian Food Items:");
db.foodItems.find({ "isVeg": true, "isActive": true });

// 3. Find orders with total price greater than 100
console.log("High Value Orders (>100):");
db.orders.find({ "orderTotalPrice": { $gt: 100 } });

// ============================================================================
// SECTION 9: AGGREGATION EXAMPLES
// ============================================================================

console.log("\n=== AGGREGATION EXAMPLES ===");

// 1. Group food items by category
console.log("Food Items Grouped by Category:");
db.foodItems.aggregate([
  { $group: { _id: "$categoryId", count: { $sum: 1 }, items: { $push: "$name" } } }
]);

// 2. Group food items by cuisine
console.log("Food Items Grouped by Cuisine:");
db.foodItems.aggregate([
  { $group: { _id: "$cuisineId", count: { $sum: 1 }, items: { $push: "$name" } } }
]);

// 3. Calculate average order total
console.log("Average Order Total:");
db.orders.aggregate([
  { $group: { _id: null, avgOrderTotal: { $avg: "$orderTotalPrice" } } }
]);

// ============================================================================
// SECTION 10: UPDATE OPERATIONS (Examples)
// ============================================================================

console.log("\n=== UPDATE OPERATIONS (Examples) ===");

// Note: These are example update operations - uncomment to execute

// 1. Update a user's email
// db.users.updateOne(
//   {"id": "1"}, 
//   {$set: {"emailId": "john.doe.updated@example.com", "updatedTs": new Date()}}
// );

// 2. Deactivate a food item
// db.foodItems.updateOne(
//   {"id": "1"}, 
//   {$set: {"isActive": false, "updatedTs": new Date()}}
// );

// 3. Update multiple documents - mark all non-veg items in a category
// db.foodItems.updateMany(
//   {"categoryId": "2", "isVeg": false}, 
//   {$set: {"updatedTs": new Date()}}
// );

// ============================================================================
// SECTION 11: DELETE OPERATIONS (Examples)
// ============================================================================

console.log("\n=== DELETE OPERATIONS (Examples) ===");

// Note: These are example delete operations - uncomment to execute

// 1. Delete a specific cart item
// db.cartItems.deleteOne({"id": "1"});

// 2. Delete all inactive sessions
// db.userSessions.deleteMany({"isActive": false});

// ============================================================================
// SECTION 12: INDEX OPERATIONS
// ============================================================================

console.log("\n=== INDEX OPERATIONS ===");

// Show existing indexes
console.log("Indexes on users collection:");
db.users.getIndexes();

console.log("Indexes on foodItems collection:");
db.foodItems.getIndexes();

// Create indexes for better performance (examples)
// db.users.createIndex({"emailId": 1});
// db.foodItems.createIndex({"categoryId": 1, "isActive": 1});
// db.orders.createIndex({"userId": 1, "createdTs": -1});

console.log("\n=== ASSESSMENT COMPLETE ===");
console.log("All major MongoDB operations demonstrated!");
console.log("Database: food_order_app");
console.log("Collections: users, categories, cuisines, restaurants, foodItems, menus, menuItems, carts, cartItems, orders, orderItems, userSessions, shippingDetails");
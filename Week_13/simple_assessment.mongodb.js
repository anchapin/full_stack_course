// NoSQL Assessment - Simple Version
use('food_order_app');

// ============================================================================
// BASIC QUERIES - Core Assessment Requirements
// ============================================================================

console.log("=== NoSQL ASSESSMENT QUERIES ===");

// 1. View sample data from each collection
console.log("1. Sample Users:");
db.users.find().limit(2);

console.log("2. Sample Categories:");
db.categories.find();

console.log("3. Sample Food Items:");
db.foodItems.find().limit(3);

console.log("4. Sample Restaurants:");
db.restaurants.find();

// ============================================================================
// FILTERED QUERIES
// ============================================================================

console.log("\n=== FILTERED QUERIES ===");

// Admin users
console.log("5. Admin Users:");
db.users.find({"isAdmin": true});

// Vegetarian food items
console.log("6. Vegetarian Food Items:");
db.foodItems.find({"isVeg": true});

// Active food items
console.log("7. Active Food Items:");
db.foodItems.find({"isActive": true});

// ============================================================================
// PROJECTIONS (Specific Fields)
// ============================================================================

console.log("\n=== PROJECTION QUERIES ===");

// User names and emails only
console.log("8. User Names and Emails:");
db.users.find({}, {"userName": 1, "emailId": 1, "_id": 0});

// Food item names only
console.log("9. Food Item Names:");
db.foodItems.find({}, {"name": 1, "isVeg": 1, "_id": 0});

// ============================================================================
// COUNT OPERATIONS
// ============================================================================

console.log("\n=== COUNT OPERATIONS ===");

console.log("10. Document Counts:");
console.log("Total Users:", db.users.countDocuments());
console.log("Admin Users:", db.users.countDocuments({"isAdmin": true}));
console.log("Vegetarian Items:", db.foodItems.countDocuments({"isVeg": true}));
console.log("Total Restaurants:", db.restaurants.countDocuments());

// ============================================================================
// RELATIONSHIP QUERIES
// ============================================================================

console.log("\n=== RELATIONSHIP QUERIES ===");

// Food items by category
console.log("11. Food Items in Category 1:");
db.foodItems.find({"categoryId": "1"});

// Food items by cuisine
console.log("12. Food Items in Cuisine 1:");
db.foodItems.find({"cuisineId": "1"});

// User carts
console.log("13. Carts for User 1:");
db.carts.find({"userId": "1"});

// ============================================================================
// SORTING AND LIMITING
// ============================================================================

console.log("\n=== SORTING AND LIMITING ===");

// Sorted users
console.log("14. Users sorted by username:");
db.users.find({}, {"userName": 1, "fullName": 1}).sort({"userName": 1}).limit(3);

// ============================================================================
// ADVANCED QUERIES
// ============================================================================

console.log("\n=== ADVANCED QUERIES ===");

// Multiple conditions
console.log("15. Active Vegetarian Food Items:");
db.foodItems.find({"isVeg": true, "isActive": true});

// Regex search
console.log("16. Users with example.com emails:");
db.users.find({"emailId": /example\.com$/});

// ============================================================================
// AGGREGATION
// ============================================================================

console.log("\n=== AGGREGATION ===");

// Group by category
console.log("17. Food Items by Category:");
db.foodItems.aggregate([
  {$group: {_id: "$categoryId", count: {$sum: 1}}}
]);

// Group by cuisine
console.log("18. Food Items by Cuisine:");
db.foodItems.aggregate([
  {$group: {_id: "$cuisineId", count: {$sum: 1}}}
]);

console.log("\n=== ASSESSMENT COMPLETE ===");
console.log("All core MongoDB operations demonstrated!");
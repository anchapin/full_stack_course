// Quick Test - MongoDB Playground
use('food_order_app');

// Simple test to verify connection
console.log("=== QUICK TEST ===");

// 1. Test basic find
console.log("First user:");
db.users.findOne();

// 2. Count documents
console.log("Total users:", db.users.countDocuments());

// 3. Simple filter
console.log("Admin users:");
db.users.find({"isAdmin": true});

console.log("Test complete!");
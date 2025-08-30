# VS Code MongoDB Extension Setup

## Installation Steps:
1. **Open VS Code**
2. **Extensions Panel** (Ctrl+Shift+X)
3. **Search:** "MongoDB for VS Code"
4. **Install** the official MongoDB extension by MongoDB

## Connection Setup:
1. **Open Command Palette** (Ctrl+Shift+P)
2. **Type:** "MongoDB: Connect"
3. **Connection String:** `mongodb://localhost:27017`
4. **Database:** `food_order_app`

## Using the Extension:

### View Collections:
- Expand the connection in the MongoDB panel
- Browse collections: users, categories, foodItems, etc.

### Run Queries:
1. **Right-click** on a collection
2. **Select** "Launch MongoDB Playground"
3. **Write queries** like:

```javascript
// View all users
use('food_order_app');
db.users.find();

// Find admin users
use('food_order_app');
db.users.find({"isAdmin": true});

// Count vegetarian food items
use('food_order_app');
db.foodItems.countDocuments({"isVeg": true});
```

### Export Results:
- Query results can be exported to JSON
- Copy results directly from the output panel

## Alternative: MongoDB Compass
If you prefer a dedicated GUI:
1. **Download:** https://www.mongodb.com/try/download/compass
2. **Install** the Community version (free)
3. **Connect:** mongodb://localhost:27017
4. **Select Database:** food_order_app

## Quick Test Queries:
```javascript
// Basic collection overview
use('food_order_app');
db.stats();

// List all collections
use('food_order_app');
show collections;

// Sample data from each collection
use('food_order_app');
db.users.findOne();
db.categories.findOne();
db.foodItems.findOne();
```
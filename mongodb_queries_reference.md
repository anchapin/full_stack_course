# MongoDB Queries Reference for Food Order App Assessment

## Database Connection Info
- **Database Name:** `food_order_app`
- **Host:** `localhost:27017`
- **DBeaver Connection:** NoSQL → MongoDB

## Collections Available
1. `users` - User accounts
2. `userSessions` - User login sessions  
3. `categories` - Food categories
4. `cuisines` - Cuisine types
5. `restaurants` - Restaurant information
6. `foodItems` - Food items/products
7. `menus` - Restaurant menus
8. `menuItems` - Items in specific menus
9. `carts` - Shopping carts
10. `cartItems` - Items in carts
11. `orders` - Completed orders
12. `orderItems` - Items in orders
13. `shippingDetails` - Delivery information

## Basic MongoDB Query Examples

### View All Documents in a Collection
```javascript
db.users.find()
db.categories.find()
db.restaurants.find()
```

### Find Specific Documents
```javascript
// Find admin users
db.users.find({"isAdmin": true})

// Find active food items
db.foodItems.find({"isActive": true})

// Find vegetarian food items
db.foodItems.find({"isVeg": true})
```

### Count Documents
```javascript
db.users.countDocuments()
db.foodItems.countDocuments({"isVeg": true})
```

### Find with Projections (specific fields)
```javascript
// Get only usernames and emails
db.users.find({}, {"userName": 1, "emailId": 1})

// Get food item names and categories
db.foodItems.find({}, {"name": 1, "categoryId": 1})
```

## Assessment-Specific Queries to Try

### Users Collection
```javascript
// All users
db.users.find()

// Admin users only
db.users.find({"isAdmin": true})

// Active users
db.users.find({"isActive": true})
```

### Food Items
```javascript
// All food items
db.foodItems.find()

// Vegetarian items only
db.foodItems.find({"isVeg": true})

// Items by category
db.foodItems.find({"categoryId": "1"})
```

### Restaurants and Menus
```javascript
// All restaurants
db.restaurants.find()

// Menus for a specific restaurant
db.menus.find({"restaurantId": "1"})

// Menu items for a specific menu
db.menuItems.find({"menuId": "1"})
```

## DBeaver Tips
- Use the SQL Editor with MongoDB syntax
- Right-click collections to browse data
- Use the Data tab to view documents in table format
- Use the Document tab for JSON view
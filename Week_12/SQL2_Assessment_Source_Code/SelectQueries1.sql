/*use food_order_app database */
use food_order_app;

/* 1. Display all distinct cuisine names. */
SELECT DISTINCT name
FROM cuisine;

/* 2. Display description of 'Cake' category. */
SELECT description
FROM category
WHERE name = 'Cake';

/* 3. Select all restaurants where restaurant names ends with 'Junction'. */
SELECT *
FROM restaurant
WHERE name LIKE '%Junction';

/* 4. Display details of all vegeterian fooditems. */
SELECT *
FROM `fooditem`
WHERE `isVeg` = 1;

/* 5. Retrieve all menu items with food items that have a price equal to or less than $10. */
SELECT 
    menu_items.id AS menu_item_id,
    menu_items.menuId,
    menu_items.fooditemId,
    menu_items.fooditemPrice,
    fooditem.name AS fooditem_name,
    fooditem.description,
    fooditem.image
FROM 
    menu_items
JOIN 
    fooditem ON menu_items.fooditemId = fooditem.id
WHERE 
    menu_items.fooditemPrice <= 10;

/* 6.Retrieve cartId having the maximum number of food items. */
SELECT cartId
FROM cart_items
GROUP BY cartId
ORDER BY SUM(unitsInCart) DESC
LIMIT 1;

/* 7. Retrieve all the shipping details where emailId contains 'doe'. */
SELECT *
FROM shippingdetails
WHERE emailId LIKE '%doe%';

/* 8. Retrieve the order with the highest price. */
SELECT *
FROM `order`
ORDER BY orderTotalPrice DESC
LIMIT 1;
 
/* 9. Retrieve the most recently updated order. */
SELECT *
FROM `order`
ORDER BY updatedTs DESC
LIMIT 1;

/* 10. How many total units of food items were purchased in orderId 1? */
SELECT SUM(unitsPurchased) AS total_units_purchased
FROM order_items
WHERE orderId = 1;

/* use food_order_app database */
use food_order_app;

/* 1. Retrieve number of fooditems for each cuisine */
SELECT
    c.id AS cuisineId,
    c.name AS cuisineName,
    COUNT(f.id) AS fooditemCount
FROM
    cuisine c
LEFT JOIN
    fooditem f ON c.id = f.cuisineId
GROUP BY
    c.id, c.name;

/* 2. Retrieve category names in the order of highest to lowest no. of fooditems */
SELECT 
    c.name AS category_name,
    COUNT(f.id) AS fooditem_count
FROM 
    category c
LEFT JOIN 
    fooditem f ON c.id = f.categoryId
GROUP BY 
    c.id, c.name
ORDER BY 
    fooditem_count DESC;

/* 3. Retrieve cuisine name as CuisineName, fooditem name as name FoodItemName 
and description as Description of all the fooditems belonging to 'Italian' cuisine */
SELECT
    cuisine.name AS CuisineName,
    fooditem.name AS FoodItemName,
    fooditem.description AS Description
FROM
    fooditem
JOIN
    cuisine ON fooditem.cuisineId = cuisine.id
WHERE
    cuisine.name = 'Italian';

/* 4. Retrieve details of food items, including their name, vegetarian status,
 and cuisine name, for only those food items that are vegetarian. */
SELECT
    f.name AS fooditem_name,
    f.isVeg,
    c.name AS cuisine_name
FROM
    fooditem f
JOIN
    cuisine c ON f.cuisineId = c.id
WHERE
    f.isVeg = 1;

/* 5. Retrieve the details of users who have items in their cart 
along with the total order amount */
SELECT 
    u.id AS userId,
    u.userName,
    u.fullName,
    u.emailId,
    u.phoneNo,
    c.id AS cartId,
    c.orderTotalPrice
FROM
    `user` u
    INNER JOIN cart c ON u.id = c.userId
WHERE
    c.isActive = 1
    AND EXISTS (
        SELECT 1
        FROM cart_items ci
        WHERE ci.cartId = c.id
          AND ci.isActive = 1
    );

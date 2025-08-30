-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: food_order_app
-- ------------------------------------------------------
-- Server version	8.4.6

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `restaurantId` int NOT NULL,
  `orderTotalPrice` decimal(10,2) DEFAULT '0.00',
  `isActive` int DEFAULT '1',
  `createdTs` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId` (`userId`),
  KEY `restaurantId` (`restaurantId`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`restaurantId`) REFERENCES `restaurant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,1,3,270.00,1,'2025-07-29 02:20:11','2025-07-29 02:20:11'),(2,2,4,140.00,1,'2025-07-29 02:20:11','2025-07-29 02:20:11'),(3,3,7,100.00,1,'2025-07-29 02:20:11','2025-07-29 02:20:11');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cartId` int NOT NULL,
  `fooditemId` int NOT NULL,
  `fooditemPrice` decimal(10,2) NOT NULL,
  `unitsInCart` int NOT NULL DEFAULT '1',
  `isActive` int DEFAULT '1',
  `createdTs` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `cartId` (`cartId`),
  KEY `fooditemId` (`fooditemId`),
  CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`cartId`) REFERENCES `cart` (`id`),
  CONSTRAINT `cart_items_ibfk_2` FOREIGN KEY (`fooditemId`) REFERENCES `fooditem` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
INSERT INTO `cart_items` VALUES (1,1,4,10.00,4,1,'2025-07-29 02:22:16','2025-07-29 02:22:16'),(2,1,5,25.00,4,1,'2025-07-29 02:22:16','2025-07-29 02:22:16'),(3,1,13,14.00,5,1,'2025-07-29 02:22:16','2025-07-29 02:22:16'),(4,1,20,12.00,5,1,'2025-07-29 02:22:16','2025-07-29 02:22:16'),(6,2,2,12.00,5,1,'2025-07-29 02:22:16','2025-07-29 02:22:16'),(7,2,9,15.00,2,1,'2025-07-29 02:22:16','2025-07-29 02:22:16'),(8,2,10,25.00,2,1,'2025-07-29 02:22:16','2025-07-29 02:22:16'),(9,3,19,25.00,4,1,'2025-07-29 02:22:16','2025-07-29 02:22:16');
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `isActive` int NOT NULL DEFAULT '1',
  `createdTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Pizza','Mouthwatering slices of cheesy goodness, baked to perfection.','https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg',1,'2025-07-29 02:09:14','2025-07-29 02:09:14'),(2,'Pasta','Deliciously sauced strands of pasta, cooked al dente for the perfect bite.','https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',1,'2025-07-29 02:09:14','2025-07-29 02:09:14'),(3,'Icecream','Creamy frozen treats in a rainbow of flavors to satisfy your sweet cravings.','https://cdn.pixabay.com/photo/2018/08/16/22/59/ice-cream-3611698_1280.jpg',1,'2025-07-29 02:09:14','2025-07-29 02:09:14'),(4,'Cake','Indulgent layers of moist cake, frosted with heavenly flavors and artistic designs.','https://www.themealdb.com/images/media/meals/ldnrm91576791881.jpg',1,'2025-07-29 02:09:14','2025-07-29 02:09:14'),(5,'Soup','Warm bowls of comforting goodness, brimming with flavorful broths and fresh ingredients.','https://www.themealdb.com/images/media/meals/1529446137.jpg',1,'2025-07-29 02:09:14','2025-07-29 02:09:14'),(6,'Curry','Aromatic and spicy creations from around the world, guaranteed to tantalize your taste buds.','https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg',1,'2025-07-29 02:09:14','2025-07-29 02:09:14'),(7,'Sandwich','Stacked with fresh ingredients, these handcrafted delights are perfect for a quick and satisfying meal.','https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg',1,'2025-07-29 02:09:14','2025-07-29 02:09:14'),(8,'Salad','Crisp and refreshing mixtures of vibrant greens, colorful vegetables, and zesty dressings for a healthy feast.','https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',1,'2025-07-29 02:09:14','2025-07-29 02:09:14'),(9,'Sushi','Artfully crafted bites of fresh fish, rice, and seaweed, a symphony of flavors in every bite.','https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg',1,'2025-07-29 02:09:14','2025-07-29 02:09:14'),(10,'Rolls','Delightfully wrapped rolls filled with a variety of ingredients, making every bite an explosion of flavors.','https://cdn.pixabay.com/photo/2018/03/15/12/16/food-3228057_1280.jpg',1,'2025-07-29 02:09:14','2025-07-29 02:09:14'),(11,'Prawns','Juicy and succulent prawns, expertly seasoned and cooked to perfection, a seafood lover\'s delight.','https://cdn.pixabay.com/photo/2020/10/18/17/17/meal-5665508_1280.jpg',1,'2025-07-29 02:09:14','2025-07-29 02:09:14'),(12,'Paneer','Soft and creamy cubes of Indian cottage cheese, cooked in a rich and aromatic blend of spices.','https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1017&q=80',1,'2025-07-29 02:09:14','2025-07-29 02:09:14'),(13,'Tofu','Versatile and protein-packed, tofu dishes offer a healthy and satisfying alternative to meat.','https://cdn.pixabay.com/photo/2016/01/15/06/57/vegetarian-1141242_1280.jpg',1,'2025-07-29 02:09:14','2025-07-29 02:09:14'),(14,'Noodles','Slurp-worthy bowls of steaming noodles, tossed in savory sauces and loaded with fresh ingredients.','https://cdn.pixabay.com/photo/2020/02/15/20/38/noodles-4851996_1280.jpg',1,'2025-07-29 02:09:14','2025-07-29 02:09:14'),(15,'Chicken','Tender and juicy chicken dishes prepared in a variety of styles, from crispy fried to succulent grilled options.','https://www.themealdb.com/images/media/meals/hglsbl1614346998.jpg',1,'2025-07-29 02:09:14','2025-07-29 02:09:14');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuisine`
--

DROP TABLE IF EXISTS `cuisine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuisine` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `isActive` int DEFAULT '1',
  `createdTs` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuisine`
--

LOCK TABLES `cuisine` WRITE;
/*!40000 ALTER TABLE `cuisine` DISABLE KEYS */;
INSERT INTO `cuisine` VALUES (1,'Italian','Mouthwatering slices of cheesy goodness, baked to perfection.','https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Collage_cucina_italiana.jpg/300px-Collage_cucina_italiana.jpg',1,'2025-07-29 02:13:46','2025-07-29 02:13:46'),(2,'Indian','Discover the diverse and vibrant flavors of India, from aromatic curries to sizzling tandoori dishes and mouthwatering biryanis.','https://cdn.pixabay.com/photo/2018/12/04/16/49/indian-food-3856050_1280.jpg',1,'2025-07-29 02:13:46','2025-07-29 02:13:46'),(3,'Chinese','Embark on a culinary journey through China with savory stir-fries, delectable dumplings, and aromatic fried rice.','https://cdn.pixabay.com/photo/2016/02/22/17/05/food-1216048_1280.jpg',1,'2025-07-29 02:13:46','2025-07-29 02:13:46'),(4,'Japanese','Savor the delicate artistry of Japanese cuisine with fresh sushi, savory ramen, and perfectly grilled teriyaki delights.','https://cdn.pixabay.com/photo/2015/02/17/07/54/sushi-639105_1280.jpg',1,'2025-07-29 02:13:46','2025-07-29 02:13:46'),(5,'Thai','Indulge in the exotic and harmonious flavors of Thailand, from fragrant curries to zesty stir-fries and tangy, sweet-sour delights.','https://cdn.pixabay.com/photo/2016/10/13/05/16/thai-curry-1736806_1280.jpg',1,'2025-07-29 02:13:46','2025-07-29 02:13:46'),(6,'Mexican','Spice up your taste buds with vibrant Mexican flavors, from sizzling fajitas to zesty guacamole and refreshing margaritas.','https://cdn.pixabay.com/photo/2019/04/14/03/08/burrito-4126108_1280.jpg',1,'2025-07-29 02:13:46','2025-07-29 02:13:46'),(7,'American','Experience the classic tastes of America with juicy burgers, crispy fried chicken, and all-American favorites like mac and cheese.','https://cdn.pixabay.com/photo/2014/09/18/21/17/sandwich-451403_1280.jpg',1,'2025-07-29 02:13:46','2025-07-29 02:13:46'),(8,'French','Indulge in the elegance of French cuisine with delicate pastries, rich sauces, and gourmet classics like Coq au Vin and Ratatouille.','https://cdn.pixabay.com/photo/2016/11/22/19/31/macarons-1850216_1280.jpg',1,'2025-07-29 02:13:46','2025-07-29 02:13:46'),(9,'Greek','Indulge in the simple yet delicious flavors of Greece, from tangy tzatziki and tender souvlaki to crispy spanakopita and sweet baklava.','https://cdn.pixabay.com/photo/2021/01/10/04/37/salad-5904093_1280.jpg',1,'2025-07-29 02:13:46','2025-07-29 02:13:46'),(10,'Turkish','Delight in the rich and aromatic flavors of Turkish cuisine, from succulent kebabs and flavorful mezes to mouthwatering baklava and traditional Turkish tea.','https://cdn.pixabay.com/photo/2016/09/06/14/23/authentic-greek-1649223_1280.jpg',1,'2025-07-29 02:13:46','2025-07-29 02:13:46');
/*!40000 ALTER TABLE `cuisine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fooditem`
--

DROP TABLE IF EXISTS `fooditem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fooditem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `categoryId` int NOT NULL,
  `cuisineId` int NOT NULL,
  `isVeg` tinyint(1) DEFAULT NULL,
  `isActive` int DEFAULT '1',
  `createdTs` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  KEY `cuisineId` (`cuisineId`),
  CONSTRAINT `fooditem_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`),
  CONSTRAINT `fooditem_ibfk_2` FOREIGN KEY (`cuisineId`) REFERENCES `cuisine` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fooditem`
--

LOCK TABLES `fooditem` WRITE;
/*!40000 ALTER TABLE `fooditem` DISABLE KEYS */;
INSERT INTO `fooditem` VALUES (1,'Cabbage Roll','Savory parcels of goodness, stuffed with a flavorful medley.','https://www.themealdb.com/images/media/meals/q8sp3j1593349686.jpg',10,10,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(2,'Grill Mac & Cheese Sandwich','Indulgent fusion of cheesy comfort and crispy perfection.','https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg',7,7,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(3,'New York Cheescake','A slice of velvety bliss from the Big Apple\'s finest.','https://www.themealdb.com/images/media/meals/swttys1511385853.jpg',4,7,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(4,'Nutty Chicken Curry','A tantalizing dance of flavors, where nuttiness meets spicy delight.','https://www.themealdb.com/images/media/meals/swttys1511385853.jpg',6,2,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(5,'Spicy Arrabiata Penne','Fiery pasta perfection that will ignite your taste buds.','https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',2,1,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(6,'Salmon Prawn Risotto','Creamy risotto kissed by the sea, with succulent salmon and plump prawns.','https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg',11,1,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(7,'Egg Drop Soup','A warm embrace of silky broth and delicate egg ribbons.','https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg',5,3,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(8,'Dal Fry','A fragrant bowl of golden lentils, simmered to perfection.','https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg',6,2,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(9,'Chocolate Souffle','A decadent masterpiece of airy chocolate delight that melts in your mouth.','https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg',4,8,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(10,'Chic-Fil-A Sandwich','The epitome of crispy, juicy chicken goodness, served with love.','https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg',7,7,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(11,'Thai Green Curry','A harmonious blend of vibrant Thai herbs and spices in a creamy green curry.','https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg',6,5,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(12,'Ma Po Tofu','Szechuan delight with silky tofu and a spicy kick that will leave you craving more.','https://www.themealdb.com/images/media/meals/1525874812.jpg',13,3,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(13,'Breakfast Potatoes','Golden-brown potatoes, seasoned to perfection, adding flair to your morning.','https://www.themealdb.com/images/media/meals/1550441882.jpg',8,7,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(14,'Ratatouille','A melody of fresh vegetables harmoniously simmered into a rustic masterpiece.','https://www.themealdb.com/images/media/meals/1550441882.jpg',8,8,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(15,'Chicken Alfredo','Creamy pasta perfection with al dente fettuccine coated in velvety Alfredo sauce.','https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg',2,1,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(16,'Prawn Noodles','Succulent prawns meet fragrant noodles, delivering an explosion of flavors.','https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg',14,3,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(17,'Chicken Baked Tacos','Refried beans, ground chicken and sour cream.','https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg',15,6,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(18,'Salmon Sushi','Sushi rice topped with smoked salmon.','https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg',9,4,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(19,'Veg Pizza','Mouthwatering pizza made of fresh veggies.','https://images.unsplash.com/photo-1604917869287-3ae73c77e227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwcGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',1,1,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03'),(20,'Berry Icecream','Made with plain greek yoghurt mixed with berries and vanilla cream.','https://images.unsplash.com/photo-1627222295124-f8b3fc09e47f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGljZWNyZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',3,9,1,1,'2025-07-29 02:17:03','2025-07-29 02:17:03');
/*!40000 ALTER TABLE `fooditem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `restaurantId` int NOT NULL,
  `isActive` int DEFAULT '1',
  `createdTs` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `restaurantId` (`restaurantId`),
  CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`restaurantId`) REFERENCES `restaurant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,1,1,'2025-07-29 02:17:56','2025-07-29 02:17:56'),(2,2,1,'2025-07-29 02:17:56','2025-07-29 02:17:56'),(3,3,1,'2025-07-29 02:17:56','2025-07-29 02:17:56'),(4,4,1,'2025-07-29 02:17:56','2025-07-29 02:17:56'),(5,5,1,'2025-07-29 02:17:56','2025-07-29 02:17:56'),(6,6,1,'2025-07-29 02:17:56','2025-07-29 02:17:56'),(7,7,1,'2025-07-29 02:17:56','2025-07-29 02:17:56'),(8,8,1,'2025-07-29 02:17:56','2025-07-29 02:17:56'),(9,9,1,'2025-07-29 02:17:56','2025-07-29 02:17:56'),(10,10,1,'2025-07-29 02:17:56','2025-07-29 02:17:56');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_items`
--

DROP TABLE IF EXISTS `menu_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `menuId` int NOT NULL,
  `fooditemId` int NOT NULL,
  `fooditemPrice` decimal(10,2) NOT NULL,
  `isActive` int DEFAULT '1',
  `createdTs` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `menuId` (`menuId`),
  KEY `fooditemId` (`fooditemId`),
  CONSTRAINT `menu_items_ibfk_1` FOREIGN KEY (`menuId`) REFERENCES `menu` (`id`),
  CONSTRAINT `menu_items_ibfk_2` FOREIGN KEY (`fooditemId`) REFERENCES `fooditem` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_items`
--

LOCK TABLES `menu_items` WRITE;
/*!40000 ALTER TABLE `menu_items` DISABLE KEYS */;
INSERT INTO `menu_items` VALUES (1,1,1,10.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(2,1,4,15.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(3,1,8,10.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(4,1,11,12.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(5,1,17,25.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(6,2,1,12.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(7,2,3,22.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(8,2,6,17.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(9,2,12,24.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(10,2,15,15.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(11,3,4,10.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(12,3,5,25.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(13,3,13,14.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(14,3,20,12.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(15,4,2,12.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(16,4,9,15.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(17,4,10,25.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(18,5,16,35.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(19,6,18,30.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(20,7,19,25.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(21,8,16,32.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(22,8,19,34.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(23,9,18,32.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(24,9,19,30.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09'),(25,10,10,30.00,1,'2025-07-29 02:19:09','2025-07-29 02:19:09');
/*!40000 ALTER TABLE `menu_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `restaurantId` int NOT NULL,
  `orderTotalPrice` decimal(10,2) NOT NULL,
  `shippingDetailsId` int NOT NULL,
  `orderStatus` varchar(50) NOT NULL,
  `isActive` int DEFAULT '1',
  `createdTs` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `restaurantId` (`restaurantId`),
  KEY `shippingDetailsId` (`shippingDetailsId`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `order_ibfk_2` FOREIGN KEY (`restaurantId`) REFERENCES `restaurant` (`id`),
  CONSTRAINT `order_ibfk_3` FOREIGN KEY (`shippingDetailsId`) REFERENCES `shippingdetails` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,1,2,160.00,1,'PROCESSING',1,'2023-05-11 10:00:00','2023-05-11 10:00:00'),(2,2,5,70.00,2,'SHIPPED',1,'2022-05-09 12:00:00','2022-05-09 13:00:00'),(3,3,10,90.00,3,'DELIVERED',1,'2023-05-08 05:00:00','2023-05-08 07:00:00');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderId` int NOT NULL,
  `fooditemId` int NOT NULL,
  `fooditemPrice` decimal(10,2) NOT NULL,
  `unitsPruchased` int DEFAULT NULL,
  `isActive` int DEFAULT '1',
  `createdTs` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `orderId` (`orderId`),
  KEY `fooditemId` (`fooditemId`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`fooditemId`) REFERENCES `fooditem` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,1,1,12.00,5,1,'2023-05-11 10:00:00','2023-05-11 10:00:00'),(2,1,3,22.00,1,1,'2023-05-11 10:00:00','2023-05-11 10:00:00'),(3,1,12,24.00,2,1,'2023-05-11 10:00:00','2023-05-11 10:00:00'),(4,1,15,15.00,2,1,'2023-05-11 10:00:00','2023-05-11 10:00:00'),(5,2,16,35.00,2,1,'2023-05-09 12:00:00','2023-05-09 12:00:00'),(6,3,10,10.00,3,1,'2023-05-08 05:00:00','2023-05-08 05:00:00');
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `contact` int DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `isActive` int DEFAULT '1',
  `createdTs` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,'Flavor Fusion','123 Main Street, New York, NY 10001',12583690,'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',1,'2025-07-29 02:15:13','2025-07-29 02:15:13'),(2,'Tasty Haven','456 Elm Avenue, Los Angeles, CA 90001',4836383,'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',1,'2025-07-29 02:15:13','2025-07-29 02:15:13'),(3,'Gourmet Junction','789 Oak Street, Chicago, IL 60601',173734,'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',1,'2025-07-29 02:15:13','2025-07-29 02:15:13'),(4,'Savory Delights','321 Maple Drive, Houston, TX 77001',9736234,'https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&w=600',1,'2025-07-29 02:15:13','2025-07-29 02:15:13'),(5,'The Hungry Palette','987 Pine Street, Miami, FL 33101',372824,'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',1,'2025-07-29 02:15:13','2025-07-29 02:15:13'),(6,'Culinary Oasis','654 Cedar Lane, San Francisco, CA 94101',137473,'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',1,'2025-07-29 02:15:13','2025-07-29 02:15:13'),(7,'Flavor Symphony','321 Walnut Avenue, Boston, MA 02101',847223,'https://images.pexels.com/photos/2956952/pexels-photo-2956952.jpeg?auto=compress&cs=tinysrgb&w=600',1,'2025-07-29 02:15:13','2025-07-29 02:15:13'),(8,'Greenleaf Restaurant','789 Broadway, Seattle, WA 98101',828292,'https://images.pexels.com/photos/6126306/pexels-photo-6126306.jpeg?auto=compress&cs=tinysrgb&w=600',1,'2025-07-29 02:15:13','2025-07-29 02:15:13'),(9,'Spice Junction','234 Cherry Street, Atlanta, GA 30301',228484,'https://cdn.pixabay.com/photo/2020/08/27/07/31/restaurant-5521372_1280.jpg',1,'2025-07-29 02:15:13','2025-07-29 02:15:13'),(10,'The Food Town','567 Elmwood Road, Denver, CO 80201',9363344,'https://cdn.pixabay.com/photo/2016/11/21/16/02/outdoor-dining-1846137_1280.jpg',1,'2025-07-29 02:15:13','2025-07-29 02:15:13');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shippingdetails`
--

DROP TABLE IF EXISTS `shippingdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shippingdetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shippingAddress` varchar(200) DEFAULT NULL,
  `emailId` varchar(50) DEFAULT NULL,
  `phoneNo` int DEFAULT NULL,
  `isActive` int DEFAULT '1',
  `createdTs` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shippingdetails`
--

LOCK TABLES `shippingdetails` WRITE;
/*!40000 ALTER TABLE `shippingdetails` DISABLE KEYS */;
INSERT INTO `shippingdetails` VALUES (1,'123 Main St, Anytown USA','johndoe@example.com',5551234,1,'2025-07-29 02:24:05','2025-07-29 02:24:05'),(2,'456 Oak St, Anytown USA','janedoe@example.com',5555678,1,'2025-07-29 02:24:05','2025-07-29 02:24:05'),(3,'789 Elm St, Anytown USA','bob@example.com',5559012,1,'2025-07-29 02:24:05','2025-07-29 02:24:05');
/*!40000 ALTER TABLE `shippingdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL,
  `userName` varchar(50) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `emailId` varchar(100) NOT NULL,
  `phoneNo` int NOT NULL,
  `password` varchar(50) NOT NULL,
  `isActive` int NOT NULL DEFAULT '1',
  `createdTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'john.doe','John Doe','john.doe@example.com',12345890,'password123',1,'2025-07-29 02:09:04','2025-07-29 02:09:04'),(2,'jane.doe','Jane Doe','jane.doe@example.com',9854321,'password456',1,'2025-07-29 02:09:04','2025-07-29 02:09:04'),(3,'bob.smith','Bob Smith','bob.smith@example.com',5234567,'password789',1,'2025-07-29 02:09:04','2025-07-29 02:09:04');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersession`
--

DROP TABLE IF EXISTS `usersession`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usersession` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `sessionToken` varchar(200) NOT NULL,
  `isActive` int NOT NULL DEFAULT '1',
  `createdTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersession`
--

LOCK TABLES `usersession` WRITE;
/*!40000 ALTER TABLE `usersession` DISABLE KEYS */;
INSERT INTO `usersession` VALUES (1,1,'sessionToken123',1,'2025-07-29 02:09:06','2025-07-29 02:09:06'),(2,2,'sessionToken456',1,'2025-07-29 02:09:06','2025-07-29 02:09:06'),(3,3,'sessionToken789',1,'2025-07-29 02:09:06','2025-07-29 02:09:06');
/*!40000 ALTER TABLE `usersession` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'food_order_app'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-02  9:47:47

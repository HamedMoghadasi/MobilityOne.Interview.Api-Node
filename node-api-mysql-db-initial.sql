CREATE DATABASE  IF NOT EXISTS `nodeapi` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `nodeapi`;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `phoneNumber` varchar(16) DEFAULT NULL,
  `emailAddress` varchar(38) DEFAULT NULL,
  `password` varchar(42) DEFAULT NULL,
  `lastLogin` datetime DEFAULT NULL,
  `createDate` datetime DEFAULT NULL,
  `suspended` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES 
(1,'Hamed Moghadasi','+989197558632','h4lmed@gmail.com','001716','2021-03-17 06:58:00','2021-03-17 06:58:00',0),
(2,'Ali','+989127115487','Ali@outlook.com','445970','2021-03-17 10:35:00','2021-03-17 10:35:00',0),
(3,'Shahrzad','+989191644875','Shahrzad@gmail.com','0014523','2021-03-17 10:36:00','2021-03-17 10:36:00',0),
(4,'Hamid','+989127111444','Hamid@live.com','784960','2021-03-17 10:36:00','2021-03-17 10:36:00',1),
(5,'Hassan','+989147589421','Hassan@gmail.com','987548','2021-03-17 10:36:00','2021-03-17 10:36:00',0),
(6,'Fatemeh','+989215478632','Fatemeh@yahoo.com','126985','2021-03-17 10:36:00','2021-03-17 10:36:00',0),
(7,'John','+989154785698','John@gmail.com','147863','2021-03-17 10:36:00','2021-03-17 10:36:00',0),
(8,'Alex','+989124587584','Alex@gmail.com','159753','2021-03-17 10:36:00','2021-03-17 10:36:00',1),
(9,'Hamed','+989197558632','h4lmed@gmail.com','957648','2021-03-16 23:14:00','2021-03-16 23:14:00',1);

UNLOCK TABLES;


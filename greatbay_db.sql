DROP DATABASE IF EXISTS GreatBayDB;

CREATE DATABASE GreatBayDB;

USE GreatBayDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  shoes VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (shoes, price, quantity)
VALUES ("sneakers", 55.00, 100);

INSERT INTO products (shoes, price, quantity)
VALUES ("boots", 78.99, 110);

INSERT INTO products (shoes, price, quantity)
VALUES ("sandals", 18.00, 75);
-- Create a database called 'Bamazon' and switch into it for this activity --
CREATE DATABASE bamazon;
USE bamazon;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('item1', 'Cosmetics', 5.50, 100),
		('item2', 'Cosmetics', 4.25, 200),
		('item3', 'Grocery', 3.99, 300),
		('item4', 'Grocery', 4.05, 400),
		('item5', 'Produce', 1.35, 500),
		('item6', 'Produce', 0.30, 9000),
		('item7', 'Sales', 4.99, 2300),
		('item8', 'Sales', 42.50, 13000),
		('item9', 'Pharmacy', 200.75, 2),
		('item10', 'Pharmacy', 1.99, 1)
-- Create a MySQL Database called bamazon.

-- Then create a Table inside of that database called products.

-- The products table should have each of the following columns:

-- item_id (unique id for each product)

-- product_name (Name of product)

-- department_name

-- price (cost to customer)

-- stock_quantity (how much of the product is available in stores)

-- Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).







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
		('item9', 'Pharmacy', 200.75, 1),
		('item10', 'Pharmacy', 1.99, 2)
// Pull in required dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');

// Define the MySQL connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	
	user: 'root',
	password: 'PASS',
	database: 'bamazon'
});




// Then create a Node application called bamazonCustomer.js.
// Running this application will first display 

function runBamazon() {
	// Display the available inventory
	displayInventory();
}



runBamazon();






// validateInput makes sure that the user is supplying only positive integers for their inputs
function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}






function promptUserPurchase() {

	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Enter ID of item you would like to purchase',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?',
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {

		var item = input.item_id;
		var quantity = input.quantity;

		// Query db to confirm that the given item ID exists in the desired quantity
		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;

			if (data.length === 0) {
				console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
				displayInventory();

			} else {
				var productData = data[0];
				if (quantity <= productData.stock_quantity) {
					console.log('Congratulations, the product you requested is in stock! Placing order!');

					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

					// Update the inventory
					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Your order has been placed! Your total is $' + productData.price * quantity);
						console.log('Thank you for shopping with us!');
						console.log("\n---------------------------------------------------------------------\n");

						// End the database connection
						connection.end();
					})
				} else {
					console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
					console.log('Please modify your order.');
					console.log("\n---------------------------------------------------------------------\n");

					displayInventory();
				}
			}
		})
	})
}





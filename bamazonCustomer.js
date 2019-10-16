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





function runBamazon() {
	displayInventory();
}



runBamazon();






// Input Validation
function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter an Item ID.';
	}
}








function promptUserPurchase() {
	inquirer.prompt([
		{
			type:'input',
			name:'item_id',
			message: 'Enter ID of item you would like to buy',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many units of this product would you like to buy?',
			validate: validateInput,
			filter: Number
		}
	]).then(function (input) {

		var item = input.item_id;
		var quantity = input.quantity;

		// ID match check
		var idInput = 'SELECT * FROM products WHERE ?';

		connection.query(idInput, { item_id: item }, function (err, data) {
			if (err) throw err;

			if (data.length === 0) {
				displayInventory();
				console.log('Invalid Item ID! Please enter a valid Item ID.');
			} else {
				var productData = data[0];

				// Checking if in stock
				if (quantity <= productData.stock_quantity) {
					console.log('Sufficient Quantity in Stock!');

					var updateQuantity = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

					connection.query(updateQuantity, function(err, data) {
						if (err) throw err;

						console.log('Total cost of purchase is $',productData.price * quantity);
						connection.end();
					})
				} else {
					displayInventory();
					console.log('Insufficient quantity!');
				}
			}
		})
	})
}
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


// Running this application will first display all of the items available for sale. 

function runBamazon() {
	// Display the available inventory
	// Include the ids, names, and prices of products for sale.
	displayInventory();
}



// Run the application logic
runBamazon();






// Input Validation
function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}






// promptUserPurchase will prompt the user for the item/quantity they would like to purchase
function promptUserPurchase() {

	// Prompt the user to select an item
	inquirer.prompt([
		{
			type:'input',
			name:'item_id',
			message: 'Enter ID of item you would like to purchase',
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?',
			filter: Number
		}
	]).then(function (input) {

				displayInventory();

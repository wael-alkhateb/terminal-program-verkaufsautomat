# terminal-program-verkaufsautomat

This project simulates a simple vending machine. The user can select products, pay for them , and receive change based on the available denominations in the cash box.

## Features

-Display a list of products with their prices.
-Accept user input to select products.
-Calculate and dispense change based on the available denominations in the cash box.
-Update the cash box after each transaction 

## Rrquirements

1.Clone the repository or download the project files.
'''sh 
git clone https://github.com/wael-alkhateb/verkaufsautomat.git
2.navigate to the project directory
cd verkaufsautomat
3.Install the required packages
npm install readline-sync chalk

## Usage
to start the vending machine ,run the following command:
node index.js
Follow the on-screen instructions to select products and complete transactions.

## How It Works

1. The showProductsList function displays the list of products available for purchase.
2. The purchaseOrder function handles the main logic for purchasing products.
3. The user is prompted to select a product and enter the amount paid.
4. The program calculates the remaining amount and updates the cash box.
5. If change is needed , the program calculates and dispenses it based on the available denominations in the cash box.
6. The cash box is updated after each transaction to reflect the changes.

## Notes 

.Ensure the cash box has sufficient denominations to provide change.

## License
This project is licensed under the MIT license

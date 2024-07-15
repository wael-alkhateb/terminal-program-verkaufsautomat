//import the questionInt and question function form readline-sync
import { questionInt ,question } from "readline-sync";
//import the chalk module form chalk.js
import chalk from "chalk";
// the list of products
let products = [
        {number: 1 ,name: 'Cola' , price: 2.50},
        {number: 2 ,name: 'Biscuits', price: 1.75},
        {number: 3 ,name: 'Chocolate', price: 3.00},
        {number: 4 ,name: 'Chips' ,price: 2.00},
        {number: 5 ,name: 'Juice' ,price: 2.25},
        {number: 6 ,name: 'Water' ,price: 1.50},
        {number: 7 ,name: 'Sandwich' ,price: 4.50},
        {number: 8 ,name: 'Muffin' ,price: 2.75},
        {number: 9 ,name: 'Candy Bar' , price: 1.80},
        {number: 10,name: 'Coffee' , price: 3.25}
    ];
   // function to show products list
   function showProductsList(){
    console.log(chalk.yellow('products list:'));
    products.forEach(product => {
        console.log(chalk.cyan(`Number: ${product.number}, Name: ${product.name}, price: ${product.price}`));
    });
    console.log(chalk.yellow('-----------------------------------------------'));
   }
    // available cash 
    let cashBox = {
        50: 10,
        20: 10,
        10: 10,
        5: 25,
        2: 25,
        1: 25,
        0.5: 25,
        0.2: 25,
        0.1: 25,
        0.05: 25,
        0.02: 25,
        0.01:25
    };
    function purchaseOrder(){
        while (true){
            //enter a product number or "end" to End
            const productNumberInput = question('Enter product number (or type "end" to finish):');
            //if the user types "end" break the loop to end the purchasing
            if (productNumberInput.toLocaleLowerCase() === 'end')
                 break;
                //product number input to an integer(Ganze Zahl)
                const productNumber = parseInt(productNumberInput);
                //if the input is not a valid number ask the user again
                if(isNaN(productNumber)) {
                    console.log(chalk.red('Invalid input please enter a valid product number'));
                    //skip to the next iteration if the input is invalid
                    continue;
                }
                //find the selected product by its number
                const selectedProduct = products.find(product => product.number === productNumber);
                //if the product number is invalid ask the user again
                if(!selectedProduct){
                    console.log(chalk.red('Invalid number'));
                    continue;
                }
                //show the selected product and its price
                console.log(chalk.green(`Selected product: ${selectedProduct.name} ${selectedProduct.price.toFixed(2)}`));
                // ask the user to pay 
                const paidAmount = parseFloat(question('Please pay:'));
                // if the user paid  amount is invalid or less than product price ask the user again
                if (isNaN(paidAmount) || paidAmount < selectedProduct.price){
                    console.log(chalk.red('Not enough paid'));
                    continue;
                }
                //using the paid amount as the  remaining amount to be  calculated for
                let remainingPaidAmount = paidAmount;
                //updating the cash box with the paid amount
                Object.keys(cashBox).sort((a ,b) => b -a).forEach(denomination => {
                    //converting the denomination to a numeric value
                    const denominationValue = parseFloat(denomination);
                    //calculating the number of units for the current denomination
                    const count = Math.floor(remainingPaidAmount / denominationValue);
                    //adding the units to the cash box 
                    if (count > 0) {
                        cashBox[denomination] += count;
                        //updating the remaining amount after calculation 
                        remainingPaidAmount -= count * denominationValue;
                    }
                });
                //calculating the remaining amount for the user
                let change = paidAmount - selectedProduct.price;
                if (change < 0){
                    console.log(chalk.red('There i not enough money'));
                    continue;
                }
                //calculating the change and updating the cash box
                Object.keys(cashBox).sort((a,b) => b - a).forEach(denomination => {
                    //converting the denomination to a numeric value
                    const denominationValue = parseFloat(denomination);
                    //calculating the number of  units for the current denomination
                    const count = Math.floor(change / denominationValue);
                    //decreasing the units from the cash box
                    if (count > 0 && cashBox[denomination] >= count){
                        cashBox[denomination] -= count;
                        //updating the remaining change amount after calculation
                        change -= count * denominationValue;
                    } 
                });
                //show the change details
                console.log(chalk.green(`Refund amount: ${(paidAmount - selectedProduct.price)}`));
                console.log(chalk.blue('Your purchase was completed successfully'));
                console.log(chalk.yellow('update cash box:'));
                console.log(cashBox);
                console.log(chalk.yellow('----------------------------------------------'));
        }
    }
    // calling the function to show products list
    showProductsList()
    //calling the function to start the purchase order
    purchaseOrder();
    

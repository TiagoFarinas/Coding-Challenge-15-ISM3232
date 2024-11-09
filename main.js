// Task 4: Create the Main Application
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';
console.log("Total Portfolio Value:", calculatePortfolioValue());//Display total portfolio value
console.log("Portfolio Allocation:", getPortfolioAllocation());// Display portfolio allocation
try {// Perform transactions
  const transaction1 = new Transaction(1, "buy", 5);
  console.log("Transaction 1:", transaction1);
  const transaction2 = new Transaction(2, "sell", 10);
  console.log("Transaction 2:", transaction2);
  const transaction3 = new Transaction(3, "sell", 3);
  console.log("Transaction 3:", transaction3);
  console.log("Updated Portfolio Value:", calculatePortfolioValue());// Display updated portfolio value after transactions
  console.log("Updated Portfolio Allocation:", getPortfolioAllocation());
} catch (error) {
  console.error(error.message)};
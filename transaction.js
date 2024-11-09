// Task 3 - Create the Transaction Module 
import { assets, getAssetById } from './asset.js';
export class Transaction {//Define Transaction classv
  constructor(assetId, type, quantity) {
    this.assetId = assetId;
    this.type = type;
    this.quantity = quantity;
    this.asset = getAssetById(assetId);// Get asset by ID
    this.processTransaction()};// Update quantity based on transaction type
  processTransaction() {// Method to process transaction
    if (this.type === "buy") {
      this.asset.quantity += this.quantity;
    } else if (this.type === "sell") {
      if (this.asset.quantity >= this.quantity) {
        this.asset.quantity -= this.quantity;
      } else {
        throw new Error(`Insufficient quantity for sale of ${this.asset.name}`)}}}};
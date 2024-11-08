// Task 1 - Create the Asset Module 
export const assets = [
    { id: 1, name: "Apple", type: "stock", price: 150, quantity: 10 },
    { id: 2, name: "Petrobras", type: "bond", price: 100, quantity: 20 },
    { id: 3, name: "Nvidia", type: "stock", price: 200, quantity: 5 }];
  export function getAssetById(id) {
    return assets.find(asset => asset.id === id)};
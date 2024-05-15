// 03. Create an array of JavaScript objects representing fictitious product information. Each object should contain at least the following properties:

// id (number): product identifier.
// nome (string): product name.
// price (number): product price.

const productList = [
    { id: 1, name: "T-shirt", price: 25.99 },
    { id: 2, name: "Jeans", price: 49.99 },
    { id: 3, name: "Sneakers", price: 79.99 },
    { id: 4, name: "Cap", price: 15.99 }
]

// Create a function called "filterSortProductsByPrice" that receives a maximum value (maxPrice) as a parameter and returns a new array containing only the products whose price is less than or equal to the maximum value, sorted in ascending order of price.

// Use the function to filter and sort the products with a specific maximum value and print the resulting array to the console.

function filterSortProductsByPrice(maxPrice) {
    const filteredProducts = productList.filter(function (product) 
    {
        return product.price <= maxPrice;
    });
    return filteredProducts.sort((a, b) => a.price - b.price);
}

const maxPrice = 50;

console.log(filterSortProductsByPrice(maxPrice));
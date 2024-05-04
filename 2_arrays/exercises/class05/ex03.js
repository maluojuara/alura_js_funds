// 03. Consider two color lists:

const colorsList1 = ['Red', 'Green', 'Blue', 'Yellow', 'Red']

const colorsList2 = ['Orange', 'Green', 'Purple', 'Blue']

// Create a program that joins these two lists, removing duplicate colors, and displays the final list.

const allColors = [...new Set([...colorsList1, ...colorsList2])];

console.log(allColors);
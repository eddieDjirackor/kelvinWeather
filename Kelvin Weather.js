//This is a const variable
const kelvin = 0;
//This is the conversion from Kelvin to celsius
let celsius = kelvin - 273;
//This is the conversion to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//This rounds down the Fahrenheit variable
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
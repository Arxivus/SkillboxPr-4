// задача 1:

function average(a, b, c) {
    return (a + b + c) / 3
}

console.log(average(1, 2, 3));

const average1 = (a, b, c) => ((a + b + c) / 3)

console.log(average1(3, 4, 5))

// задача  2 и 3:

function celsiusToFahrenheit_1(c) {
    return c * 1.8 + 32
}

console.log(celsiusToFahrenheit_1(25));

const celsiusToFahrenheit_2 = с => с * 1.8 + 32

console.log(celsiusToFahrenheit_2(25))



function fahrenheitToCelsius_1(f) {
    return (f - 32) / 1.8
}

console.log(fahrenheitToCelsius_1(77))

const fahrenheitToCelsius_2 = f => (f - 32) / 1.8

console.log(fahrenheitToCelsius_2(77))

// задача 4:

let count = 3

function countPlusOne() {
    count++
    console.log(count);
}

countPlusOne()
countPlusOne()

// задача 5:
const totalSum = (priceItem, amountItem, discountItem) => priceItem * amountItem * ((100 - discountItem) / 100)

console.log(totalSum(25000, 3, 20));
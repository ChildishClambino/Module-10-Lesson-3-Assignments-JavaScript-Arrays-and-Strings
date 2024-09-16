let fruits = ['apple', 'banana', 'orange'];
fruits.push('tomato')
console.log(fruits)
fruits.pop()
console.log(fruits)

let randomNumbers = [4,6,3,2,1,5]
randomNumbers.sort()
console.log(randomNumbers)


let randomNumbersDoubled= randomNumbers.map(nums => nums * 2)
console.log(randomNumbersDoubled)

let filterNumbers = randomNumbers.filter(nums => nums > 3)
console.log(filterNumbers)

let reducedNumbers = randomNumbers.reduce((acc, curr) => acc + curr, 0)
console.log(reducedNumbers)

let message = "Hello, World!";
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(message.length)
console.log(message.toUpperCase())
console.log(message.toLocaleLowerCase())
console.log(sentence.substring(4, 9))
console.log(sentence.split(" "))
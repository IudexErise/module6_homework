// Task 6.1

const arr = [0, 3, 8, 9, 12, 14, 5, 20, 0, 'dsaad', null, true, 5];
let oddCounter = 0;
let evenCounter = 0;
let zeroCounter = 0;

function countArrayElements() {
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    zeroCounter += 1
  } else if (typeof(arr[i]) !== 'number') {
    console.log(`This is not a number: ${arr[i]}`)
  } else if (arr[i] % 2 === 0) {
    evenCounter += 1
  } else {
    oddCounter +=1
  }
}
console.log(`There are ${evenCounter} even numbers`)
console.log(`There are ${oddCounter} odd numbers`)
console.log(`There are ${zeroCounter} zeros`)
}
countArrayElements();





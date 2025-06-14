const isEven = require('is-even');

const numberToTest = 4;

if (isEven(numberToTest)) {
  console.log(`✅ ${numberToTest} is even`);
} else {
  console.error(`❌ ${numberToTest} is NOT even`);
}
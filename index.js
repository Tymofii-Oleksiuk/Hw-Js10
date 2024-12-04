// const displayMessage = (message) => message;
// const message = alert("Hello World");
// console.log(displayMessage(message));

// const guessNumber = (number) => {
//   const message = prompt("Ведіть рандомне число");
//   if (message === number) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let randomNumber = Math.round(Math.random() * (100 - 1) + 1);
// console.log(guessNumber(randomNumber));

// const countSum = (a, b, c) => a + b + c;

// const makeMessage = (countSumCallBack, a, b, c) => countSumCallBack(a, b, c);

// console.log(makeMessage(countSum, 2, 91, 33));
const callback = 0;

const calculateDiscountedPrice = (price, discount, callback) => {
  const a = discount / 100;
  const b = 1 - a;
  callback = price * b;
  console.log(callback);
};
const showDiscountedPrice = (message) => alert(`Знижка скдадає ${message}`);

calculateDiscountedPrice(100, 10, callback);
showDiscountedPrice(calculateDiscountedPrice);

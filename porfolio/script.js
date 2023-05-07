'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
// ----------------------------------------------
const displayMovement = function (account) {
  containerMovements.innerHTML = '';
  account.movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovement(account1.movements);

const createUserName = function (accounts) {
  accounts.forEach(function (user) {
    user.username = user.owner
      .toUpperCase()
      .split(' ')
      .map(letter => letter[0])
      .join('');
    // return username;
  });
};
createUserName(accounts);
// console.log(accounts);
// ---------------------------

const calcPrintBalance = function (account) {
  const balance = account.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}€`;
};

// calcPrintBalance(account1);

// maximum value
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);
// const max = movements.reduce((acc, cur) => {
//   if (acc > cur) return acc;
//   else return cur;
// }, movements[0]);
// console.log(max);

// labelSumIn
const displaySummary = function (account) {
  const sum = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  // return sum
  labelSumIn.textContent = `${sum}€`;

  const Nsum = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(Nsum)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest}€`;
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault;
  console.log('login');
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount.pin === Number(inputLoginPin.value)) {
    console.log('login');
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    displaySummary(currentAccount);
    calcPrintBalance(currentAccount);
    displayMovement(currentAccount);
  }
});

// console.log(accounts);
// displaySummary(account2);
// calcPrintBalance(account2);
// displayMovement(account2);

// // console.log(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const account = accounts.find(acc => acc.owner === 'Steven Thomas Williams');
// console.log(account);

// for (const account1 of accounts) {
//   if (account1.owner === 'Steven Thomas Williams') {
//     console.log(account1);
//   }
// }

// new value that function produce need to be returned, however adjustment from an object doesn't need return.Take an example of map, map simply copy an value and make adjustment, which is produce a new value by copy one, so it needs add return.

// ----------------------------------------
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// const withdraw = movements.filter(mov => mov < 0);
// console.log(withdraw);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   console.log(`${acc},${cur},${i}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// const balance3 = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance3);
// const [deposit, withdraw] = movements.filter(function (mov) {
//   if (mov > 0) {
//     return deposit;
//   } else {
//     return withdraw;
//   }
// });

// ---------------------------------------
// const movementDescription = movements.map(function (mov, i) {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}:You withdraw ${Math.abs(mov)}`;
//   }
// });

// console.log(movementDescription);

// const eurToUsd = 1.1;
// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });
// const movementsUSD1 = movements.map(mov => mov * eurToUsd);
// console.log(movementsUSD1);

// const euroToUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(euroToUSD);
// // /////////////////////////////////////////////////
// const user = 'Benjamin wen';

// console.log(accounts);

// For this action we made some adjustments to an object of array, so we don't need to return

// let arr = ['a', 'b', 'v', 'c', 'w', 'e'];
// console.log(arr.slice(1, -2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(0, -1));
// console.log(arr);
// // --------------------------
// console.log(arr.splice(4));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // ----------------------
// arr = ['a', 'b', 'v', 'c', 'w', 'e'];
// const arr2 = ['a', 'b', 'c', 'd', 'd', 'e'];
// console.log(arr2.reverse());
// console.log(arr2);
// // -------------
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// console.log(letters.join(''));

// console.log(arr[0]);
// console.log(arr.at(0));
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// for (const [i, letter] of letters.entries()) {
//   console.log(`${letter} is the ${i + 1} letter`);
// }

// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} you withdraw ${Math.abs(movement)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'USD', 'EUR', 'TWD']);

// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const checkDogs = function (juliaData, kateData) {
//   const correctJuliaData = juliaData.slice(1, -2);
//   const alldogs = kateData.concat(correctJuliaData);
//   console.log(alldogs);
//   alldogs.forEach(function (o, i) {
//     const genre = o >= 3 ? 'Dog' : 'Puppy';
//     console.log(`Dog number ${i + 1} is a ${genre} and it's ${o} years old`);
//   });
// };
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
// console.log('break');
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const dogsHumanAge = function (dogsarray) {
//   const humanAges = dogsarray.map(age => (age <= 2 ? age * 2 : age * 4 + 16));
//   console.log(humanAges);
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(adults);
//   const average =
//     humanAges.reduce((acc, cur) => acc + cur, 0) / humanAges.length;
//   return average;
// };

// console.log(dogsHumanAge([5, 2, 4, 1, 15, 8, 3]));

'use strict';

///////// BANKIST APP

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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

///////////////// LECTURES

/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

/// SLICE - (NO MUTATE THE ORIGINAL ARRAY)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE - ( MUTATE THE ORIGINAL ARRAY )
// console.log(arr.splice(2));
arr.splice(1, 2); // Second element is for delete
console.log(arr);

// REVERSE - (MUTATE THE ORIGINAL ARRAY)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);

console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join('-'));




// FOR EACH
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calcMovments = movements.forEach(function (movement) {
  console.log(
    movement > 0
      ? `You deposited ${movement}`
      : `You withdrew ${Math.abs(movement)}`
  );
});

//////

for (const [i, movement] of movements.entries()) {
  console.log(
    movement > 0
      ? `${[i + 1]} You deposited ${movement}`
      : ` ${[i + 1]} You withdrew ${Math.abs(movement)}`
  );
}

console.log('///////// FOR EACH');

movements.forEach(function (movement, i, arr) {
  console.log(
    movement > 0
      ? `${[i + 1]} You deposited ${movement}`
      : ` ${[i + 1]} You withdrew ${Math.abs(movement)}`
  );
});



// MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUniques = new Set(['EUA', 'EUR', 'EUA', 'EUR']); // retorn uniques values

currenciesUniques.forEach(function (value, _, map) {
  console.log(`${value}`);
});



// CHALLENGE 1

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const dogsCount = [];

const checkDogs = function (dogsJulia, dogsKate) {
  // first challenge
  const correctdJuliaDogs = dogsJulia.slice();
  console.log(correctdJuliaDogs);
  correctdJuliaDogs.splice(0, 1);
  correctdJuliaDogs.splice(-2);

  // second challenge
  const dogs = correctdJuliaDogs.concat(dogsKate);

  dogs.forEach(function (dogAge, i) {
    if (dogAge >= 3) {
      console.log(
        `The dog number ${i + 1} dog has ${dogAge} years, so is an adult. `
      );
    } else {
      console.log(
        `The dog number ${i + 1} dog has ${dogAge} years, so is an puppy. `
      );
    }
  });
};

console.log(checkDogs(dogsJulia, dogsKate));

// MAP
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToEus = 2;

const convertMany = movements.map(function (movements) {
  return movements * eurToEus;
});

const convertM = movements.map(movements => movements * eurToEus);

console.log(convertM);

const movementeMany = [];
for (const mov of movements) {
  movementeMany.push(movements * eurToEus);
}

const movementDescription = movements.map(
  (mov, i) =>
    `Movement:${[i + 1]} You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementDescription);

*/

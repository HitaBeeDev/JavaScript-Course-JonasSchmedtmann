'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}. `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },

  orderPizaa: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const question = new Map([
//   ['Question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   [4, 'None of them'],
//   ['Correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);

// console.log(question);

// console.log(question.get('Question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('Correct') === answer));

// const rest = new Map();
// rest.set('name', 'Itaiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugel');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('Open', 11)
//   .set('Close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get('Open'));

// const time = 20;
// console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

// const staff = ['Chef', 'Manager', 'Waiter', 'Chef', 'Waiter', 'Manager'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pasta',
//   'Rissotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// console.log(ordersSet.add('Garlic Bread'));
// console.log(ordersSet.delete('Pizza'));

// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);
// const days = ['mon', 'tue', ' wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.open.mon);

// console.log(restaurant.openingHours.mon?.open);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const list of menu) console.log(list);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// const rest1 = {
//   name: 'Rita Moda',
//   numGuest: '30',
// };

// const rest2 = {
//   name: 'Thalles',
//   founded: '1995',
// };

// const numberOfGuests1 = rest1.numGuest || 100;
// console.log(numberOfGuests1);

// const numberOfGuests2 = rest2.numGuest || 100;
// console.log(numberOfGuests2);

// restaurant.orderPizaa('mushrooms', 'cheese', 'spinach');

// const multiArr = function (...numbers) {
//   let mp = 1;
//   for (let i = 0; i < numbers.length; i++) mp *= numbers[i];
//   console.log(mp);
// };

// multiArr(2, 3);
// multiArr(5, 10, 2);

// const x = [2, 3, 4];
// multiArr(...x);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// const [starterFood, , mainFood, ...others] = [
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ];
// console.log(starterFood, mainFood, others);

// const arr = [1, 2, 3, 4, ...[5, 6]];

// console.log(arr);

// const [a, b, ...others] = arr;
// console.log(a, b, others);

// const ingredients = [
//   prompt("Let's make pasta. What is ingredient 1? "),
//   prompt('ingredient 2? '),
//   prompt('ingredient 3? '),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);
// console.log(ingredients);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Somewhere',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const newMenu = [...restaurant.mainMenu, 'food1'];
// console.log(newMenu);

// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// const arr = [7, 8, 9, 10, 11];
// const newArr = [12, 13, 14, ...arr];
// console.log(newArr);

// const {
//   name: restaurantName,
//   starterMenu: starters,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, starters, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// let [first, second] = restaurant.starterMenu;
// console.log(first, second);

// [first, second] = [second, first];
// console.log(first, second);

// const [starter, mainCourse] = restaurant.order(1, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];

// const [f, , [g, d], e = 1] = nested;
// console.log(f, c, d, e);

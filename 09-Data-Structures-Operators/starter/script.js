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

    order: function (startedIndex, mainIndex) {
      return [this.starterMenu[startedIndex], this.mainMenu[startedIndex]];
    }
};
//
// const  arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//
// const [x, y, z] = arr;
//
// console.log(a, b, c)
// console.log(x, y, z);
//
// let [first,,, last] = restaurant.categories;
// console.log(first, last);
//
// [last , first ] = [first, last];
// console.log(first, last);
//
// const [starter, main] = restaurant.order(1,2);
// console.log(starter, main);
//
// const nested = [2,4,[1,2]];
// const [i,,[k,j]] = nested;
// console.log(i,k,j);

// const {name: restaurantName, location: restaurantLocation} = restaurant;
//
// const { meny = [], starterMenu : starter = [] } = restaurant;
// console.log(meny, starter);
//
// let a = 1;
// let b = 2;
// const obj = { a: 1111, b: 2222};
// console.log(a,b);
//
// ({a,b} = obj);
// console.log(a,b);
//

// const arr = [1,2,3];
//
// const badNewArr = [0, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
//
// const goodNewArr = [0, ...arr];
// console.log(goodNewArr);
//
// console.log(...goodNewArr);
//
// const newMenu = [...restaurant.mainMenu, 'Soups'];
// console.log(newMenu);
//
// const mainMenuCopy = [...restaurant.mainMenu];
//
// const joinedArr = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(joinedArr);

// const copyRestaurant = {...restaurant, isCopy: true};
// console.log(copyRestaurant);

// const arr = [1,2,3,...[4,5]];
// console.log(arr);
//
// const [a,b,...others] = [1,2,3,4,5];
// console.log(a,b,others);
//
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, ...otherFood);
//
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// console.log(3 || 'ilias');
// console.log('' || 'ilias');
// console.log(false || 0 || 'ilias');
// console.log(null || undefined);
// console.log(undefined || null);
//
// console.log(false && 0 && 'ilias');

// let name = '' || 'ilias';
// console.log(name);
//
// name ||= 'john';
// console.log(name);
//
// name &&= 'john';
// console.log(name);

let a1 = { name:'a1', value:1 };
let a2 = { name:'a2', value:2 };

let a = { name: 'a', a1, a2}

console.log(a.a1)

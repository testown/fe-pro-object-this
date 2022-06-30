import { hotel } from './index.js';

console.log(`колич гостей сейчас - ${hotel.getLength()}`);
console.log(`колич свободных мест - ${hotel.getActualFreePlace()}`);
// console.log(hotel.checkInGuest());

console.log(hotel.checkInGuest('1', '2', '3'));
console.log(hotel.checkInGuest('4', '5', '6'));
console.log(hotel.checkInGuest('7', '8', '9'));

console.log(hotel);


/*

+Необходимо сделать объект(сделайте просто через литерал {}, вместо new Object() который будет по 
умолчанию тут в файле)
+В нем должно быть свойство quantityOfPlaces, которое показывает количество мест. Оно полностью
 статическое и не будет меняться, значение 30
+Должно быть свойство priceByPlace которое показывает, сколько стоит одно место в отеле. Его 
стоимость 20
+Должно быть свойство bankAccount, оно говорит сколько денег на счету нашего отеля. В самом 
начале там 0, будет увеличиваться на priceByPlace когда заселяется человек
+Должно быть свойство guests, которое в начале содержит пустой объект {}.
+Когда будете добавлять объекты сюда(гостей) они будут вида:

guests: {
    0: {
        firstName: 'Bohdan',
        lastName: 'Rammfall',
        money: 40,
    },
},
+Метод getLength который возвращает количество гостей в текущий момент
+Метод getActualFreePlace который возвращает количество свободных мест(quantityOfPlaces - getLength())
+Метод paidPerPlace который добавляет к счету нашего отеля(bankAccount) стоимость одного 
места(priceByPlace)
+Метод checkInGuest который имеет 3 аргумента. Имя, фамилия и количество денег.

Если в отеле нет свободных мест, то ничего не меняет внутри объекта и возвращает строку 
'Sorry, we have not free spaces'
Если у пользователя не хватает денег(меньше нашего priceByPlace) то не меняем никак объект, 
возвращаем строку 'Sorry, you have not enough money'
Если предыдущие условия не выполняются, мы добавляем в наши guests новый объект с 
данными(пример выше), которые приняли в аргументы, но кроме количества денег. Вы должны 
отнять стоимость места, и остаток суммы положить в объект.
hotel.checkInGuest('Bohdan', 'rammfall', 40);

console.log(hotel.guests);
// выводит
{
  1: {
    firstName: 'Bohdan',
    lastName: 'Rammfall',
    money: 20,
  }
}
То есть передавали в метод 40, но записали 20, потому что забрали плату за проживание

Пробовать вызывать методы или свойства только в файле check.js. Этот объект доступен там
*/

// export const hotel = new Object();
export const hotel = {
  quantityOfPlaces: 30, //показывает количество мест (не меняется)
  priceByPlace: 20, //показывает, сколько стоит одно место в отеле
  bankAccount: 0, //сколько денег на счету нашего отеля, будет увеличиваться на priceByPlace когда заселяется человек
  guestsId: 0,
  guests: {},
  getLength() {
    //возвращает количество гостей в текущий момент
    //alert('aa');
    return Object.keys(this.guests).length;
  },
  getActualFreePlace() {
    //который возвращает количество свободных мест(quantityOfPlaces - getLength())
    return this.quantityOfPlaces - this.getLength();
  },
  paidPerPlace() {
    //который добавляет к счету нашего отеля(bankAccount) стоимость одного места(priceByPlace)
    this.bankAccount += this.priceByPlace;
  },
  checkInGuest(firstName, lastName, money) {
    //который имеет 3 аргумента. Имя, фамилия и количество денег.
    // NewGuest();
    if (this.getActualFreePlace <= 0) return 'Sorry, we have not free spaces';
    if (money < this.priceByPlace) return 'Sorry, you have not enough money';
    money -= this.priceByPlace;
    this.paidPerPlace();
    this.guests[this.guestsId++] = {
      firstName: firstName,
      lastName: lastName,
      money: money,
    };
  },
};

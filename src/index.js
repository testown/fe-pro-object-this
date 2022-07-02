// export const hotel = new Object();
export const hotel = {
  quantityOfPlaces: 30, //показывает количество мест (не меняется)
  priceByPlace: 20, //показывает, сколько стоит одно место в отеле
  bankAccount: 0, //сколько денег на счету нашего отеля, будет увеличиваться на priceByPlace когда заселяется человек
  guests: {},
  getLength() {
    //возвращает количество гостей в текущий момент
    return Object.keys(this.guests).length;
  },
  getActualFreePlace() {
    //который возвращает количество свободных мест(quantityOfPlaces - getLength())
    return this.quantityOfPlaces - this.getLength();
  },
  paidPerPlace() {
    //который добавляет к счету нашего отеля(bankAccount) стоимость одного места(priceByPlace)
    return (this.bankAccount += this.priceByPlace); // скобки поставил prettier :)
  },
  checkInGuest(firstName, lastName, money) {
    //который имеет 3 аргумента. Имя, фамилия и количество денег.
    if (this.getActualFreePlace() <= 0) return 'Sorry, we have not free spaces';
    if (money < this.priceByPlace) return 'Sorry, you have not enough money';
    money -= this.priceByPlace;
    this.paidPerPlace();
    const newGuest = {
      firstName: firstName,
      lastName: lastName,
      money: money,
    };
    this.guests[this.getLength() + 1] = newGuest;
    return newGuest;
  },
};

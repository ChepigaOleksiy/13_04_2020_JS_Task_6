// 1 task
// - создать массив с 20 числами.
// let arrayOfFirstTask = [];
// for (let iterator = 0; iterator < 20; iterator++) {
//   arrayOfFirstTask[iterator] = Math.floor(Math.random() * 100 * 100);
// }
// console.log(`Исходный массив 1 задания ${arrayOfFirstTask}`);
// console.log("________________________");

// -- при помощи метода sort отсортировать массив.
// arrayOfFirstTask.sort(function (a ,b){
//     return a-b;
// })
// console.log(`Отсортированный массив 1 задания в порядке возрастания ${arrayOfFirstTask}`);
// console.log('________________________');
// arrayOfFirstTask.sort(function (a ,b){
//     return b-a;
// })
// console.log(`Отсортированный массив 1 задания в порядке убывания ${arrayOfFirstTask}`);
// console.log('________________________');
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// arrayOfFirstTask.sort(function (a, b) {
//    return callBack(a ,b);
// })
// function callBack (a ,b){
//     if (a>b) {return -1}
//     else if(b<a) {return 1}
//     else {return 0};
// }
// console.log(`Отсортированный массив 1 задания в порядке убывания с применением callBack ${arrayOfFirstTask}`);
// console.log('________________________');

// 	-- при помощи filter получить числа кратные 3

// let resultArray = [];
// resultArray = arrayOfFirstTask.filter((value) => {
//   if (value % 3 === 0) return true;
// });
// console.log(
//   `Отсортированный массив 1 задания в порядке убывания с применением filter, с кратность 3: ${resultArray}`
// );
// console.log("________________________");

//  при помощи filter получить числа кратные 10

// let resultArrayNew = [];
// resultArrayNew = arrayOfFirstTask.filter((value) => {
//   if (value % 10 === 0) return true;
// });
// console.log(
//   `Отсортированный массив 1 задания в порядке убывания с применением filter, с кратностью 10: ${resultArrayNew}`
// );
// console.log("________________________");

// //  -- перебрать (проитерировать) массив при помощи foreach()

// arrayOfFirstTask.forEach(((value,index)=>{
//     console.log(`Текущее значение массива ${index} из forEach ${value}`);
// }))

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let resultArray = [];
// resultArray = arrayOfFirstTask.map((value) => {
//   return value * 3;
// });
// console.log(
//   `Отсортированный массив 1 задания в порядке убывания с применением map: ${resultArray}`
// );
// console.log("________________________");

// 2 задание
// - создать массив со словами на 15-20 элементов.
// let arrayOfWords = [
//   "First",
//   "Second",
//   "Third",
//   "Fourth",
//   "Fifth",
//   "Sixth",
//   "Seventh",
//   "Eighth",
//   "Ninth",
//   "Tenth",
//   "Eleventh",
//   "Twelfth",
//   "Thirteenth",
//   "Fourteenth",
//   "Fifteenth",
// ];

// console.log(`Исходный массив 2 задания ${arrayOfWords}`);
// console.log("________________________");

// -- отсортировать его по алфавиту в восходящем порядке.
// arrayOfWords.sort();
// console.log(
//   `Отсортированный массив 2 задания в порядке возрастания ${arrayOfWords}`
// );
// console.log("________________________");

// -- отсортировать его по алфавиту  в нисходящем порядке.
// arrayOfWords.reverse();

// console.log(
//     `Отсортированный массив 2 задания в порядке убывания ${arrayOfWords}`
//   );
//   console.log("________________________");

//   -- отфильтровать слова длиной менее 6х символов

// let resultArray = [];
// resultArray = arrayOfWords.filter((value) => {
//   if (value.length > 5) {
//     return true;
//   }
// });
// console.log(
//   `Отсортированный массив 2 со словами, диной более 4 символов ${resultArray}`
// );
// console.log("________________________");

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let resultArray = [];
// resultArray = arrayOfWords.map((value) => {
//   return value + "!";
// });
// console.log(`перебранный массив 2 с "!" в конце слов ${resultArray}`);
// console.log("________________________");

// Задание 3
// let users = [
//   { name: "vasya", age: 31, status: false },
//   { name: "petya", age: 30, status: true },
//   { name: "kolya", age: 29, status: true },
//   { name: "olya", age: 28, status: false },
//   { name: "max", age: 30, status: true },
//   { name: "anya", age: 31, status: false },
//   { name: "oleg", age: 28, status: false },
//   { name: "andrey", age: 29, status: true },
//   { name: "masha", age: 30, status: true },
//   { name: "olya", age: 31, status: false },
//   { name: "max", age: 31, status: true },
// ];

// console.log(`Исходный массив 3 задания`, users);
// console.log("________________________");

// - відсортувати його за  віком зростання.

// users.sort((a, b) => {
//   if (a.age < b.age) {
//     return -1;
//   }
// });
// console.log(`Отсортированный массив 3 задания по мере увеличения возраста`, users);
// console.log("________________________");

// - відсортувати його за  віком спадання

// users.sort((a, b) => {
//   if (a.age > b.age) {
//     return -1;
//   }
// });
// console.log(`Отсортированный массив 3 задания по мере уменьшения возраста`, users);
// console.log("________________________");

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort ((a ,b)=>{
//     if(a.name.length<b.name.length) {return -1};
// })
// console.log(`Отсортированный массив 3 задания - по длине имён по возрастанию`, users);

// users.sort((a, b) => {
//   if (a.name.length > b.name.length) {
//     return -1;
//   }
// });
// console.log(
//   `Отсортированный массив 3 задания - по длине имён по убыванию`,
//   users
// );

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

// let newArray = JSON.parse(JSON.stringify(users));
// newArray.forEach((value) => {
//   value.id = Math.floor(Math.random() * 10);
//   return;
// });
// console.log(`Массив с новым ключём id`, newArray);
// console.log("________________________");

// // - відсортувати його за індентифікатором

// let newArraySort = JSON.parse(JSON.stringify(newArray));
// newArraySort.sort((a, b) => {
//   if (a.id < b.id) {
//     return -1;
//   }
// });
// console.log(
//   `Отсортированный массив 3 задания - по длине имён по возрастанию`,
//   newArraySort
// );

// 4 задание
// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calc (x,y, callBack) {
// let result=callBack(x,y);
// console.log (result);
// }
// calc(3 , 4, function (a ,b){return Math.pow(a ,b)});

// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calc(x, y, z, callBack) {
//   let result = callBack(x, y, z);
//   console.log(result);
// }
// calc(3, 4, 2, function (a, b, c) {
//   return Math.pow(a + b, c);
// });

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================

// 1 задание
// let cars = [
//   {
//     producer: "subaru",
//     model: "wrx",
//     year: 2010,
//     color: "blue",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 400,
//   },
//   {
//     producer: "subaru",
//     model: "legacy",
//     year: 2007,
//     color: "silver",
//     type: "sedan",
//     engine: "ez30",
//     volume: 3,
//     power: 250,
//   },
//   {
//     producer: "subaru",
//     model: "tribeca",
//     year: 2011,
//     color: "white",
//     type: "jeep",
//     engine: "ej20",
//     volume: 2,
//     power: 300,
//   },
//   {
//     producer: "subaru",
//     model: "leone",
//     year: 1998,
//     color: "yellow",
//     type: "sedan",
//     engine: "ez20x",
//     volume: 2,
//     power: 140,
//   },
//   {
//     producer: "subaru",
//     model: "impreza",
//     year: 2014,
//     color: "red",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 200,
//   },
//   {
//     producer: "subaru",
//     model: "outback",
//     year: 2014,
//     color: "red",
//     type: "hachback",
//     engine: "ej204",
//     volume: 2,
//     power: 165,
//   },
//   {
//     producer: "bmw",
//     model: "115",
//     year: 2013,
//     color: "red",
//     type: "hachback",
//     engine: "f15",
//     volume: 1.5,
//     power: 120,
//   },
//   {
//     producer: "bmw",
//     model: "315",
//     year: 2010,
//     color: "white",
//     type: "sedan",
//     engine: "f15",
//     volume: 1.5,
//     power: 120,
//   },
//   {
//     producer: "bmw",
//     model: "650",
//     year: 2009,
//     color: "black",
//     type: "coupe",
//     engine: "f60",
//     volume: 6,
//     power: 350,
//   },
//   {
//     producer: "bmw",
//     model: "320",
//     year: 2012,
//     color: "red",
//     type: "sedan",
//     engine: "f20",
//     volume: 2,
//     power: 180,
//   },
//   {
//     producer: "mercedes",
//     model: "e200",
//     year: 1990,
//     color: "silver",
//     type: "sedan",
//     engine: "eng200",
//     volume: 2,
//     power: 180,
//   },
//   {
//     producer: "mercedes",
//     model: "e63",
//     year: 2017,
//     color: "yellow",
//     type: "sedan",
//     engine: "amg63",
//     volume: 3,
//     power: 400,
//   },
//   {
//     producer: "mercedes",
//     model: "c250",
//     year: 2017,
//     color: "red",
//     type: "sedan",
//     engine: "eng25",
//     volume: 2.5,
//     power: 230,
//   },
// ];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let resultArray=[];
// resultArray=cars.filter((iterator)=>{
// if (iterator.volume>=3) {return true};
// })
// console.log (`Классная работа. Массив машин с V>=3 `, resultArray);

// - двигун = 2л
// let resultArray=[];
// resultArray=cars.filter((iterator)=>{
// if (iterator.volume==2) {return true};
// })
// console.log (`Классная работа. Массив машин с V=2 `, resultArray);

// - виробник мерс
// let resultArray=[];
// resultArray=cars.filter((iterator)=>{
// if (iterator.producer=='mercedes') {return true};
// })
// console.log (`Классная работа. Массив машин Mercedes `, resultArray);

// - двигун більше 3х літрів + виробник мерседес
// let resultArray=[];
// resultArray=cars.filter((iterator)=>{
// if (iterator.producer=='mercedes' && iterator.volume>=3) {return true};
// })
// console.log (`Классная работа. Массив машин Mercedes + V>=3`, resultArray);

// двигун більше 3х літрів + виробник субару

// let resultArray=[];
// resultArray=cars.filter((iterator)=>{
// if (iterator.producer=='subaru' && iterator.volume>=3) {return true};
// })
// console.log (`Классная работа. Массив машин subaru + V>=3`, resultArray);

// сили більше ніж 300
// let resultArray=[];
// resultArray=cars.filter((iterator)=>{
// if (iterator.power>=300) {return true};
// })
// console.log (`Классная работа. Массив машин power>=300`, resultArray);

// - сили більше ніж 300 + виробник субару
// let resultArray=[];
// resultArray=cars.filter((iterator)=>{
// if (iterator.power>=300 && iterator.producer=='subaru') {return true};
// })
// console.log (`Классная работа. Массив машин subaru power>=300`, resultArray);

// - мотор серіі ej
// let resultArray=[];
// resultArray=cars.filter((iterator)=>{
// if (iterator.engine[0]==='e' && iterator.engine[1]==='j') {return true};
// })
// console.log (`Классная работа. Массив машин с мотором серии "ej"`, resultArray);

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let resultArray=[];
// resultArray=cars.filter((iterator)=>{
// if (iterator.power>=300 && iterator.producer=='subaru' && iterator.engine[0]==='e' && iterator.engine[1]==='j') {return true};
// })
// console.log (`Классная работа. Массив машин subaru power>=300 с мотором серии "ej"`, resultArray);

// - двигун меньше 3х літрів + виробник мерседес
// resultArray = [];
// resultArray = cars.filter((iterator) => {
//   if (iterator.producer === "mercedes" && iterator.volume<3) {
//     return true;
//   }
// });
// console.log(`Классная работа. Массив машин Mercedes power<300`, resultArray);

// - двигун більше 2л + сили більше 250
// resultArray = [];
// resultArray = cars.filter((iterator) => {
//   if (iterator.power>=250 && iterator.volume>2) {
//     return true;
//   }
// });
// console.log(`Классная работа. Массив машин двигателеме >2л и мощностью >=250`, resultArray);

// - сили більше 250  + виробник бмв

// resultArray = [];
// resultArray = cars.filter((iterator) => {
//   if (iterator.power>=250 && iterator.producer=='bmw') {
//     return true;
//   }
// });
// console.log(`Классная работа. Массив машин BMW мощностью >=250`, resultArray);

// 2 задание
// let usersWithAddress = [
//   {
//     id: 1,
//     name: "vasya",
//     age: 31,
//     status: false,
//     address: { city: "Lviv", street: "Shevchenko", number: 16 },
//   },
//   {
//     id: 2,
//     name: "petya",
//     age: 30,
//     status: true,
//     address: { city: "Lviv", street: "Panasa-Murnogo", number: 1 },
//   },
//   {
//     id: 3,
//     name: "kolya",
//     age: 29,
//     status: true,
//     address: { city: "Lviv", street: "Gogolya", number: 121 },
//   },
//   {
//     id: 4,
//     name: "olya",
//     age: 28,
//     status: false,
//     address: { city: "Lviv", street: "Mayzkovskogo", number: 90 },
//   },
//   {
//     id: 5,
//     name: "max",
//     age: 30,
//     status: true,
//     address: { city: "Lviv", street: "Gete", number: 115 },
//   },
//   {
//     id: 6,
//     name: "anya",
//     age: 31,
//     status: false,
//     address: { city: "Lviv", street: "Lenina", number: 2 },
//   },
//   {
//     id: 7,
//     name: "oleg",
//     age: 28,
//     status: false,
//     address: { city: "Lviv", street: "Rahmaninova", number: 22 },
//   },
//   {
//     id: 8,
//     name: "andrey",
//     age: 29,
//     status: true,
//     address: { city: "Lviv", street: "Baha", number: 43 },
//   },
//   {
//     id: 9,
//     name: "masha",
//     age: 30,
//     status: true,
//     address: { city: "Lviv", street: "Shestakovicva", number: 12 },
//   },
//   {
//     id: 10,
//     name: "olya",
//     age: 31,
//     status: false,
//     address: { city: "Lviv", street: "Pyatnitskaya", number: 16 },
//   },
//   {
//     id: 11,
//     name: "max",
//     age: 31,
//     status: true,
//     address: { city: "Lviv", street: "Stivenson", number: 121 },
//   },
// ];
// -- отсортировать его по id пользователей (в обратном опрядке)
// usersWithAddress.sort((a,b)=>{
//     if (a.id>b.id) {return -1}
// })
// console.log(`Отсортированный массив `, usersWithAddress);

// -- отсортировать его по возрасту пользователей
// usersWithAddress.sort((a,b)=>{
//     if (a.age<b.age) {return -1}
// })
// console.log(`Отсортированный массив по возрасту`, usersWithAddress);

// -- отсортировать его по возрасту пользователей в обратном порядке

// usersWithAddress.sort((a,b)=>{
//     if (a.age>b.age) {return -1}
// })
// console.log(`Отсортированный массив по возрасту`, usersWithAddress);

// -- отсортировать его по имени пользователей
// usersWithAddress.sort((a,b)=>{
//         if (a.name<b.name) {return -1}
//     })
//     console.log(`Отсортированный массив по именам`, usersWithAddress);

// -- отсортировать его по имени пользователей в обратном порядке
// usersWithAddress.sort((a, b) => {
//   if (a.name > b.name) {
//     return -1;
//   }
// });
// console.log(
//   `Отсортированный массив по именам в обратном порядке`,
//   usersWithAddress
// );
// -- отсортировать его по названию улицы  в алфавитном порядке

// usersWithAddress.sort((a, b) => {
//     if (a.address.street < b.address.street) {
//       return -1;
//     }
//   });
//   console.log(
//     `Отсортированный массив по улицам`,
//     usersWithAddress
//   );

//   -- отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort((a, b) => {
//     if (a.address.number < b.address.number) {
//       return -1;
//     }
//   });
//   console.log(
//     `Отсортированный массив по номеру дома`,
//     usersWithAddress
//   );

//   -- отфильтровать (оставить) тех кто младше 30

// let newArray=usersWithAddress.filter(value=>value.age<30);

//   console.log(
//     `Отсортированный массив - младше 30 `,
//     newArray
//   );

//   -- отфильтровать (оставить) тех у кого отрицательный статус

// let newArray=usersWithAddress.filter(value=>value.status===false);

//   console.log(
//     `Отсортированный массив - статус false `,
//     newArray
//   );

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let newArray=usersWithAddress.filter(value=>value.status===false && value.age<30);

//   console.log(
//     `Отсортированный массив - статус false и меньше 30`,
//     newArray
//   );

//   -- отфильтровать (оставить) тех у кого номер дома четный
// let newArray = usersWithAddress.filter(
//   (value) => value.address.number % 2 === 0
// );

// console.log(`Отсортированный массив - номер дома четный `, newArray);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// // Дополнительное задание 2

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// let enterArray=[];
// for (let iterator=0; iterator<10; iterator++){
//  enterArray.push(Math.floor(Math.random()*10));
// }
// enterArray = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// console.log(`Исходный массив - вводные данные`, enterArray);
// let key = +prompt("Введите искомое число", 1);

// compare(key, enterArray);

// function compare(key, array) {
//   let quantity = 0;
//   for (iterator of array) {
//     if (iterator === key) {
//       quantity++;
//     }
//   }
//   console.log(`Количество повторений ${quantity}`);

//   if (quantity === 1) {
//     let MinIndex = array.findIndex((value) => {
//       if (value === key) {
//         return true;
//       }
//     });

//     console.log(`MinIndex`, MinIndex);
//   } else if (quantity > 1) {
//     let MinIndex = array.findIndex((value) => {
//       if (value === key) {
//         return true;
//       }
//     });
//     console.log(`MinIndex`, MinIndex);
//     let MaxIndex = array.lastIndexOf(key);
//     console.log(`MaxIndex`, MaxIndex);
//   } else console.log(`Такого элемента нет -1`);
// }

// Дополнительное задание 1

// Створити обєкт автомобіля з полями:
// Марка автомобля,
// потужність двигуна,
// власник,
// ціна,
// рік випуску.

// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя,
// вік,
// стаж водіння.

// Створити не менше 7 та не більше 20 машинок.
// 1. Для початку вкладіть всі наші створені автомобілі в масив cars.

// 2. Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

// 3. На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

// 4. Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

function Jaguar(brand, power, owner, price, year) {
  this.brand = brand;
  this.power = power;
  this.owner = owner;
  this.price = price;
  this.year = year;
}
function Owner(name, age, skill) {
  this.name = name;
  this.age = age;
  this.skill = skill;
}

let xeS = new Jaguar("XE", 180, new Owner("John", 32, 12), 1043115, 2020);
let xeSE = new Jaguar(
  "XE SE",
  180,
  new Owner("WhiteFox", 28, 7),
  1034720,
  2020
);
let xeHSE = new Jaguar(
  "XE HSE",
  180,
  new Owner("Kifator", 26, 3),
  1263263,
  2020
);
let xeRDynamicS = new Jaguar(
  "XE R‑DYNAMIC S",
  180,
  new Owner("Bergreys", 22, 4),
  1117877,
  2020
);
let xeRDynamicSE = new Jaguar(
  "XE R‑DYNAMIC SE",
  180,
  new Owner("Vilma", 23, 6),
  1209777,
  2020
);
let xeRDynamicHSE = new Jaguar(
  "XE R‑DYNAMIC HSE",
  180,
  new Owner("Scruffy", 31, 9),
  1347185,
  2020
);
// 1п - массив из автомобилей
let carJaguar = [xeS, xeSE, xeHSE, xeRDynamicS, xeRDynamicSE, xeRDynamicHSE];

console.log(`Исходный массив `, carJaguar);
// 2п - увеличение папрметров
let copyCarArray = JSON.parse(JSON.stringify(carJaguar));
copyCarArray.forEach((value, index) => {
  if ((index !== 0 && index % 2 !== 0) || index === 1) {
    value.power += 0.1 * value.power;
    value.price += 0.05 * value.price;
  }
});
console.log(`Массив с изменёнными параметрами`, copyCarArray);
// 3п - заменить водителей
let secondCopyCarArray = JSON.parse(JSON.stringify(copyCarArray));

let newOwnerArray = [
  ,
  new Owner("Katalina", 26, 8),
  ,
  new Owner("Bergreys", 36, 15),
  ,
  new Owner("Tundra", 32, 14),
];
console.log(newOwnerArray);

secondCopyCarArray.forEach((value, index) => {
  if ((index !== 0 && index % 2 !== 0) || index === 1) {
    value.owner = newOwnerArray[index];
  }
});
console.log(`Массив с новыми водителями`, secondCopyCarArray);

// 4п проверка стажа
thirdCopyCarArray = JSON.parse(JSON.stringify(secondCopyCarArray));
thirdCopyCarArray.forEach((value) => {
  if (value.owner.skill < 5 && value.owner.age > 25) {
    let increment = 5 - value.owner.skill;
    console.log(`Курсы посетит ${value.owner.name} ${increment} раза`);
    for (i = 0; i < increment; i++) {
      value.owner.skill += courses();
    }
  }
});
function courses() {
  return 1;
}
console.log(`Массив с улучшенными водителями`, thirdCopyCarArray);
// 5п
let sumCoast = null;
thirdCopyCarArray.forEach((value) => {
  sumCoast += value.price;
});
console.log(`Суммарная стоимость всех авто `, sumCoast, `грн`);

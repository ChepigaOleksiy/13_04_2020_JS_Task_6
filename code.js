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

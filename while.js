//part A
//Task 1
const person = {
  name: "Shir Lifshitz",
  age: 25,
  isStudent: true,
};

console.log("Person Object:", person);

//Task 2
console.log(person.name);
console.log(person.age);
console.log(person["isStudent"]);

//Task 3
person.age = 30;
person.hobby = "Reading book";
console.log("update person object", person);

//Task 4
const movie = {
  title: "Inception",
  genre: "Science Fiction",
};
movie.releaseYear = 2022;
movie.ispopular = true;
movie.genre = "Thriller";
console.log("movie object", movie);

//Task 5
const car = {
  make: "toyota",
  model: "yaris",
  year: 2021,
  color: "white",
};
console.log("car object properties:");
for (let key in car) {
  console.log("${key}:${car[key]}");
}
//Task 6
const FirstPerson = {
  name: "yotam",
  age: 30,
};
const SecondPerson = {
  name: "Galit",
  age: 56,
};
function combinePepole(obj1, obj2) {
  (firstPersonName = obj1.name),
    (firstPersonAge = obj1.age),
    (SecondPersonName = obj2.name),
    (SecondPersonAge = obj2.age);
}

const mergeob = combinePepole(FirstPerson, SecondPerson);
console.log("combined object:", mergeob);
//Task 7
function countProperties(obj) {
  return Object.keys(obj).length;
}
console.log(countProperties(person));
console.log(countProperties(movie));
//Task 8
delete person.isStudent;
console.log(person);
//Task 9
function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}
//בדיקה
onsole.log(hasProperty(car, "make"));
console.log(hasProperty(car, "price"));
//Task 10
function updatePerson(person, key, value) {
  person[key] = value;
}
updatePerson(person, "age", 26);
console.log(person);
updatePerson(person, "city", "Tel Aviv");
console.log(person);
//part B
//Task 1
let fruits = ["banana", "apple", "orenge", "pear", "watermalon"];
console.log(fruits);
//Task 2
const firstfruit = fruits[0];
const lastfruit = fruits[4];
//Task 3
fruits.push("pineaple");
fruits.unshift("strawbary");
fruits.pop();
console.log(fruits);
//Task 4
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}
//Task 5
console.log(fruits.length);
//Task 6
function isInArray(array, element) {
  return array.includes(element);
}
console.log(isInArray(fruits, "apple")); // בדיקה
console.log(isInArray(fruits, "pineapple"));
//Task 7
fruits.sort();
console.log("Sorted fruits array:", fruits);
//Task 8
fruits.reverse();
console.log("Reversed fruits array:", fruits);
//Task 9
// שלב 1: יצירת מערך של 10 מספרים אקראיים
let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
// שלב 2: פונקציה שמסננת מספרים זוגיים
function filterEvenNumbers(array) {
  return array.filter((num) => num % 2 === 0);
}
//Task 10
let fruits2 = ["תפוח", "בננה", "תות"];
let vegetables = ["עגבנייה", "מלפפון", "גזר"];
let groceries = [...fruits, ...vegetables];
console.log("מערך משולב:", groceries);

// Object
// : one of the Javascript's data types, a collection of related data and/or functionality.
// => Nearly all objects in Javascript are instances of Object.
// => we can define this object in two ways
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax


// ✅ Literals and properties 

const print = (person) => {
    console.log(person.name);
    console.log(person.age);
}

const dasol = { name: 'dasol', age: 23 };
print(dasol);

// with Javascript magic (dynamically typed language)
// can add properties later!
dasol.hasJob = true;
console.log(dasol.has.job); // true

// also can delete properties later! 
delete dasol.hasJob;
console.log(dasol.hasJob); // undefined!


// ✅ Computed properties: object['key']

// ❗ Don't remember that key should be always string
console.log(dasol.name); // dasol
console.log(dasol['name']); // dasol

// When to use?: you don't know what the key's property is at the point of coding.
const printValue = (obj, key) => {
    console.log(obj.key);
}

printValue(dasol, 'name'); // undefined

// Let's use computed property instead of this.
const printValue = (obj, key) => {
    console.log(obj[key]);
}

printValue(dasol, 'name'); // dasol


// ✅ Constructor Function (before introducing class)
// A function that acts as a template, such as a class, rather than repeatedly writing the coding of an object. 👌

const dasol = { name: 'dasol', age: 23 };
const dasom = { name: 'dasom', age: 22 };
const yesol = { name: 'yesol', age: 20 };
const unknown = new Person('unknown', 20 );
console.log(unknown); // { name: 'unknown', age: 20 }

function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// ✅ in operator: property existence check (key in obj)
console.log('name' in obj); // true
console.log('age' in obj); // true
console.log('random' in obj); // false
console.log(obj.random); // undefined


// ✅ for..in vs for..of

// ◽ for (key in obj)
for(key in dasol) {
    console.log(key);
}; // name age hasJob

// ◽ for (value of iterable)
const array = [1, 2, 3, 4];
for(value of array) {
    console.log(value);
} // 1 2 3 4


// ✅ Cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: 20 };
const user2 = user;
user2.name = 'coder'; 
console.log(user); // {name: 'coder', age: 20} 

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3); // {name: 'coder', age: 20} 

// new way ✨
const user4 = Object.assign({}, user);

console.log(user4); // {name: 'coder', age: 20} 

// another example
const fruit1 = { color: 'red' }
const fruit2 = { color: 'blue', size: 'big' }
const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color); // blue
console.log(mixed.size) // big
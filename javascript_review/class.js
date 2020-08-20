// ✨ Object-oriented programming
// => class: template
// => vs object: instance of a class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance
// - two ways of defining class: Class declarations & Class expressions

// ✅ Class declarations
// ❗ Note that it is not 'hoisted', unlike function declarations.
// ❗ The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown.

// ◽ Constructor()
// : The constructor method is a special method for creating and initializing an object created with a class.
// => There can only be one special method with the name "constructor" in a class. 
// => A constructor can use the 'super' keyword to call the 'constructor' of the super class.

class Person {
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}, hello!`)
    }
}

const dasol = new Person('dasol', 23);
console.log(dasol.name); // dasol
console.log(dasol.age); // 23


// ✅ Getter and Setter
// 1. getter
// ❓ The get syntax binds an object property to a function that will be called when that property is looked up.
// => purpose: 1. to allow access to a property that returns a dynamically computed value(+with set()) 2. to giva a method the status of an internal variable without requiring the use of explicit method calls. 
// => rule: 1. not possible to simultaneously have a getter bound to a property and 2. have that property actually hold a value, although it is possible to use a getter and a setter in conjunction to create a type of pseudo-property.

// Example 1 : purpose 2(give a method an internal variable)
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100

// ✔ Deleting a getter using the delete operator.
// ex. delete obj.area;

// ◽ setter
// ❓ The set syntax binds an object property to a function to be called when there is an attempt to set that property.
// => purpose: Setters are most often used in conjunction with getters to create a type of pseudo-property. 
// => rule: It is not possible to simultaneously have a setter on a property that holds an actual value and must have exactly one parameter.

// Example 2: only use set()
const language = {
    set current(name) {
      this.log.push(name);
    },
    log: []
  }
  
  language.current = 'EN';
  console.log(language.log); // ['EN']
  
  language.current = 'FA';
  console.log(language.log); // ['EN', 'FA']

// ✔ get() and set() are never permitted to assign and access, respectively.
// ✔ If you want to remove the setter, you can just delete it.
// ex. delete language.current;

// Example 3: purpose 1 (to allow access to a property that returns a dynamically computed value)
// => get() + set()
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    // Note that we cannot use 'this.age' instead of 'this._age' because it will call get() function repetively.

    set age(value) {
        this._age<0 ? 0 : value;
    }

    // methods
    speak() {
        console.log(`${this.name}, hello!`)
    }
}

const dasol = new Person('kim', 'dasol', -1);
console.log(dasol.age); // 0; 
// note that we ues 'dasol.age' instead of 'dasol._age'!

// ◽ computed property name
// : It specifies the key value of an object through an expression (using variables, functions, etc.).
// => We also apply it to getter and setter's property name.

// Example 1 (using variables)
const name1 = "apple";
const name2 = "banana";
const num = 1;
 
const obj = {
    [num+") "+name1]:"1개",
    [num+1+") "+name2]:"2개"
};
 
console.log(obj); // { 1) apple: "1개", 2) banana: "2개" }

// Example 2 (using functions)
function add(a, b){
    return a+b;
}
function conf(a, b){
    return `${a} + ${b}`;
}
const obj = {
    ["addNumber "+conf(5, 10)]:add(5, 10),
    [add(10, 20)+" is Result by"]:"10+20"
}
console.log(obj); // {addNumber 5, 10: 15, 30 is Result by: "10+20"}
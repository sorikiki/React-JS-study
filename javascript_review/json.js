// ✅ JSON: javascript object notation
// => key-value pairs
// => independent programming language and platform ✨

//  ✔ Object to JSON
// : object -> (serialize) -> string(JSON)
// stringify(object)
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple", "banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
}; // ❗ note that method is not a data so JSON do not contain this. + Symbol do so

json = JSON.stringify(rabbit);
console.log(json); // {"name": "tori", "color": "white", "size": null, "birthDate": "2020-05-29..."}

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'dasol' : value;
});
console.log(json);
/*
    key: , value: [object Object] // ❗ note that this top-ranked property prints at first.
    key: name, value: tori
    key: color, value: white
    key: size, value: null
    key: birthDate, value: ...
    key: jump, value: () => { console.log(...) };
    {"name": "dasol", "color": "white", ... }
 */

// ✔ JSON to Object
// : string(JSON) -> (deserialize) -> object
// parse(JSON)

json = JSON.stringify(rabbit);
let obj = JSON.parse(json);
// ❗ note that object do not contain jump method because 'json' do not contain this at first.

console.log(obj);
console.log(obj.birthDate.getDate());
// { ..., Date: "2020-05-29...", ... }
// Type error
// ❗ note that value of 'Date' is string type.

obj = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(value): value;
})

console.log(obj);
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
// {..., Date: Fri May 29 ... , ... }
// 29
// 29
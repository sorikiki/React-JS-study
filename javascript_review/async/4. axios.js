// ✅ API call with axios
// review(async.js): The asynchronous processing code, which is typically the target of await, is an API call function that returns a Promise, such as Axios.
// => This means that axios is an API call function that returns Promise!
/*
    import React, { useState } from 'react';
    import axios from 'axios';
    
    const App = () => {
      const [data, setData] = useState(null);
      const onClick = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
          setData(response.data);
        });
      };
      return (
        <div>
          <div>
            <button onClick={onClick}>불러오기</button>
          </div>
          {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        </div>
      );
    };
    
    export default App;
*/

// add syntatic sugar! (async-await)
/*
    import React, { useState } from 'react';
    import axios from 'axios';
    
    const App = () => {
      const [data, setData] = useState(null);
      const onClick = async () => {
        try {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos/1',
          );
          setData(response.data);
        } catch (e) {
          console.log(e);
        }
      };
      return (
        <div>
          <div>
            <button onClick={onClick}>불러오기</button>
          </div>
          {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        </div>
      );
    };
    
    export default App;
*/

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
console.log(obj.birthDate)
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


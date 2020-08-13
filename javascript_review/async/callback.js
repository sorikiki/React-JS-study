// ✅ Javascript is synchronous.
// => Excute the code block in order after hoisting. 
// => hoisting: var, function declaration


// ✅ Synchronous callback vs Asynchronous callback
/*
// synchronous callback

    function printImmediately(print) {
        print();
    }

    printImmediately(()=> console.log('hello));

// asynchronous callback

    function printWithDelay(print, timeout) {
        setTimeout(print, timeout)
    }

    printWithDelay(()=> console.log('async callback'), 2000)
*/


// ✅ Callback hell example
/*
// check id & password first, and then match id with status.
'use strict';

class UserStorage {
  logInUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if ((id === "dasol" && password === "kim") || (id === "kds" && password === "0425")) 
        {
          onSuccess(id);
        } else {
          onError(new Error("not found"));
        }
      }, 2000);
  }

  getRoles(user, onSuccess, onError) {
      setTimeout(() => {
        if (user === "dasol") {
          onSuccess({ name: "dasol", status: "student" });
        } else {
          onError(new Error("no access"));
        }
      }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.logInUser(
  id,
  password,
  user => {
      userStorage.getRoles(
      user,
      userWithRoles => {
        alert(
          `hello, ${userWithRoles.name}! You have a ${userWithRoles.status} role. `
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
      console.log(error);
  }
);

*/
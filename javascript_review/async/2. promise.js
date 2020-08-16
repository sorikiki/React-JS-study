// ✨ Promise is a Javascript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer -> consumer

/*
// ✅ Producer
const promise = new Promise((resolve, reject) => {
  // doing some heavy work. (network, read files)
  console.log("doing something"); // when new Promise is created, the executor runs automatically.
  setTimeout(() => {
    // resolve(1);
    reject(new Error("no network"));
  }, 2000);
});

// ✅ Consumer: then, catch, finally
promise
  .then((value) => console.log(value))
  .catch((error) => console.log(error))
  .finally(() => console.log('finally'));

// ✅ Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2) // 2
  .then((num) => num * 3) // 6
  .then(
    (num) =>
      new Promise((reject, resolve) => {
        setTimeout(() => {
          resolve(num - 1), 1000;
        });
      })
  ) // 5
  .then(console.log); // 5 

// ✅ Error handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    });
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000)
    })

getHen()
    .then(hen => getEgg(hen)) // .then(getEgg)
    .catch(error => {
        return '🌭';
    })
    .then(egg => cook(egg)) // .then(cook)
    .then(console.log)
*/

// ✅ Solve callback example => use promise !!
/*
class UserStorage {
    logInUser(id, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if ((id === "dasol" && password === "kim") || (id === "kds" && password === "0425")) 
          {
            resolve(id);
          } else {
            reject(new Error("not found"));
          }
        }, 2000);
      })
  }
  
    getRoles(user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user === "dasol") {
            resolve({ name: "dasol", status: "student" });
          } else {
            reject(new Error("no access"));
          }
        }, 1000);
      })
    }
  }
  
  const userStorage = new UserStorage();
  const id = prompt("enter your id");
  const password = prompt("enter your password");
  
  
  userStorage
  .logInUser( id, password )
  .then(userStorage.getRoles)
  .then(user => alert(
    `hello, ${user.name}! You have a ${user.status} role. `
  ))
  .catch(console.log)
  .finally(()=> {
    console.log('promise chaining finish')
  })
*/
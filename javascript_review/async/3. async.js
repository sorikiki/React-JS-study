// async & await
// => clear style of using promise :)

// ✅ async
/*
    function fetchUser() {
        //do network request in 10 secs...
        return 'dasol';
    }

    const user = fetchUser();
    console.log(user); // undefined (no async 😑)
*/

// let's handle this with Promise!

/*
    function fetchUser() {
        return new Promise((resolve, reject) => {
            // do network request in 10secs...
            return 'dasol';
        }
    }

    const user = fetchUser();
    console.log(user); // Promise {<pending>} => promiseState: "pending", promiseResult: undefined
*/

// let's use resolve or reject function.

/*
    function fetchUser() {
        return new Promise((resolve, reject) => {
            // do network request in 10secs...
            resolve('dasol');
        }
    }

    const user = fetchUser();
    console.log(user); // Promise {<fulfilled>: 'dasol'} => promiseState: "fulfilled", promiseResult: 'dasol'
*/

// async: syntatic sugar 💖
// do not need to return 'promise' directly!

/*
    async function fetchUser() {
        // do network request in 10 secs...
        return 'dasol';
    }

    const user = fetchUser();
    console.log(user); // Promise {<fullfilled>: 'dasol'}
    user.then(console.log) // dasol
*/

// ✅ await
// ✔ async/await syntax: 
/*
    async function 함수명() {
    await 비동기_처리_메서드_명();
}
*/
// => Attach 'await' before the asynchronous processing code that communicates HTTP among the internal logic of the function.
// => ❗ Note: It is important to note that the asynchronous processing method must return the Promise object to work as intended by await.
// => The asynchronous processing code, which is typically the target of await, is an API call function that returns a Promise, such as Axios.

// ✅ Example: bring apple => banana => print both fruits
/*
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function getApple() {
        await delay(1000);
        return '🍎';
    }

    async function getBanana() {
        await delay(2000);
        return '🍌';
    }

    ✔ callback hell 😡
    function pickFruits() {
        return getApple().then(apple => {
            return getBanana().then(banana => `${apple}+${banana}`);
        })
    }

    ✔ async & await 
    async function pickFruits() {
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple}+${banana}`;
    }
    // => it takes 3000ms because it waits until promise finishes
    
    ✔ error handling: You can use catch {} in async, just as .catch() was used for error handling in the Promise.
    async function pickFruits() {
        try {
            const apple = await getApple();
            const banana = await getBanana();
            return `${apple}+${banana}`;
        } catch(error) {
            console.log(error);
        }
        
    ✔ parallel processing 1 (async/await)
    async function pickFruits() {
        const applePromise = getApple();
        const bananaPromise = getBanana();
        const apple = await applePromise;
        const banana = await BananaPromise;
        return `${apple}+${banana}`;
    }
    // => it takes 2000ms because when new Promise is created, the executor runs automatically.

    ✔ parallel processing 2 (more useful Promise API)
        1. Promise.all
        function pickAllFruits() {
            return Promise.all([getApple(), getBanana()])
            .then(fruits => fruits.join(' + '));
        }

        pickAllFruits().then(console.log); // 🍎 + 🍌

        2. Promise.race
        function pickOnlyOne() {
            return Promise.race([getApple(), getBanana()]);
        }

        pickOnlyOne().then(console.log); // 🍎
*/
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
/*
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function getApple() {
        await delay(1000);
        return '🍎';
    }

    async function getBanana() {
        await delay(1000);
        return '🍌';
    }

    // callback hell 😡

    function pickFruits() {
        return getApple().then(apple => {
            return getBanana().then(banana => `${apple}+${banana}`);
        })
    }

    // async & await ✨

    async function pickFruits() {
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple}+${banana}`;
    }

    // => it takes 2000s because it waits until promise finishes
    
*/
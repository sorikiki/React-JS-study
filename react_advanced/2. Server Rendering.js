// ✅ Server-Side Rendering
// : user requests our app => server renders the required component(s) into an HTML string 
// => then sends it as a response to the client. => the client takes over rendering duties.
// ✔ Optimization of search engines
// ✔ Even when downloading JavaScript files is not completed, waiting time is minimized because there is content that users can see on html.
// ❗ Server overload: Caching and load balancing required
// ❗ Project structure and development methods become complex. ex. server side rendering conflicts with code splitting


// ✅ Redux on the Server
// : When using Redux with server rendering, we must also send the state of our app along in our response, so the client can use it as the initial state.
// => On the client side, a new Redux store will be created and initialized with the state provided from the server. Redux's only job on the server side is to provide the initial state of our app.

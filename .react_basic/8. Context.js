// ✅ Context?
// no need to pass the props one by one.
// => provide data all over the component 👌


// ✅ Time to Use Context 
// data that can be considered 'global' for a tree of React components!
// ex. log-in user, theme or preferred language


// ✅ Context API 

// 1. createContext : create a Context object 
// const MyContext = React.createContext(defaultValue);

// - When React renders a component that subscribes to this Context object 
// it will read the current context value from the 'closest' matching Provider above it in the tree.

// - default value: The defaultValue argument is only used when a component does not have a matching Provider above it in the tree.
// Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.


// 2. Context.Provider
// : It allows consuming components that are descendants of this Provider to subscribe to context changes.
// <MyContext.Provider value={/* ______ */}>
// ✔ value must be referred. 
// ✔ one Provider can be connected to many consumers. 
// ✔ Providers can be nested to override values deeper within the tree.

// 3. Context.Consumer
// : A React component that subscribes to context changes. 
/* ex.
    <MyContext.Consumer>
        {value => render something based on the context value }
    </MyContext.Consumer>
*/
// Requires a function as a child.
// => the function receives the current context value and returns a React node. 


// ✅ Render Props
// : The term “render prop” refers to a simple technique for sharing code between React components using a prop whose value is a function.
// => The name of props doesn't matter what you do, but they usually write the name 'render'
// => or put it in the component's children element.


// ✅ Dynamic Context 🙌: updating Context from a nested component
// => pass a function down through the context to allow consumers to update the context
// tip. separate an object of update-functions(ex. actions) from that of states(ex. state)!
// tip. make a form of default value in a createContext similar to that of Provider's value. 


// ✅ Consuming Multiple Contexts
// make each context consumer a separate node in the tree.
// for keeping context re-rendering fast (ex. userContext & themeContext)
// => If two or more context values are often used together, consider creating render prop component that provides both.
/*
    function Content() {
      return (
        <ThemeContext.Consumer>
          {theme => (
            <UserContext.Consumer>
              {user => (
                <ProfilePage user={user} theme={theme} />
              )}
            </UserContext.Consumer>
          )}
        </ThemeContext.Consumer>
    );
}
*/

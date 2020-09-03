// ✅ What is "bundling"?
// : Most React apps can load the entire app at once, including a "bundled" file that merges multiple files into one using tools such as Webpack, Rollup, or Browser.
// => If you're using the Create React App, Next.js, Gatsby, or something like that, you're probably installing a Webpack in the app you installed.


// ✅ We need "Code-splitting" ❗
// : Bundling is great, but as your app grows, your bundle grows. Especially when you add a large third-party library, you should look carefully at the code to prevent accidental app growth and longer load times.
// => It helps you deliberately delay your app's loading by preventing users from importing code that they don't need without reducing the amount of code in the app.
// => It also reduces the cost of initializing apps.

// ✅ JS function async loading
// - dynamic import😀 import(): it return Promise.
// - a module which is exported by 'default' => ex. import('./notify').then(result => result.default());


// ✅ React.lazy & Suspense
// - React.lazy: be able to code-splitting without declaring state.
// - Suspense: a built-in react component, Code splitted components can be invoked to load, and UI can be set to be shown when loading is not finished.
// => fallback props: it determines JSX to show while loading. 
/*
    // SplitMe.js 
    import React from 'react';
    const SplitMe = () => {
        return <div>SplitMe</div>
    };
    
    export default SplitMe;

    // App.js
    import React, { useState, Suspense } from 'react;
    const SplitMe = React.lazy(() => import('./SplitMe'));  
    
    const App = () => {
        const [visible, setVisible] = useState(false);
        const onClick = () => {
            setVisible(true);
        }
        return (
            <div>
                <p onClick={onClick}>Hello React!</p>
                <Suspense fallback={<div>loading...</div>}>
                    {visible && <SplitMe />}
                </Suspense>
            </div>
        )
    }

    export default App;
*/

// - You can also wrap multiple large components around a single Suspense component.
/*
    import React, { Suspense } from 'react';

    const OtherComponent = React.lazy(() => import('./OtherComponent'));
    const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

    function MyComponent() {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <section>
              <OtherComponent />
              <AnotherComponent />
            </section>
          </Suspense>
        </div>
      );
    }
*/


// ✅ Loadable Components
// - third party library  for code-splitting, supports 'server-side rendering✨'
// - it also brings splitted file before rendering.

/*
    // App.js 
    import React, { useState } from 'react';
    import loadable from '@loadable/component';
    
    const SplitMe = loadable(() => import('./SplitMe'));  
    
    const App = () => {
        const [visible, setVisible] = useState(false);
        const onClick = () => {
            setVisible(true);
        }
        return (
            <div>
                <p onClick={onClick}>Hello React!</p>
                {visible && <SplitMe />}
            </div>
        )
    }

    export default App;
*/

// ✔ if you want to show another UI while loading, modify like this.
/*
    const SplitMe = loadable(() => import('./SplitMe'), {
        fallback: <div>loading...kwd</div>
    })
*/

// ✔ how to preload component
/*
    // App.js 
    import React, { useState } from 'react';
    import loadable from '@loadable/component';
    
    const SplitMe = loadable(() => import('./SplitMe'), {
        fallback: <div>loading...</div>
    });  
    
    const App = () => {
        const [visible, setVisible] = useState(false);

        const onClick = () => {
            setVisible(true);
        }
        
        const onMouseOver = () => {
            SplitMe.preload();
        }

        return (
            <div>
                <p 
                    onClick={onClick}
                    onMouseOver={onMouseOver}>
                    Hello React!
                </p>
                {visible && <SplitMe />}
            </div>
        )
    }

*/
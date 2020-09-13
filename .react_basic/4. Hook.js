// ✅ Array destructuring assignment -> more simple 
/*
const [one, two] = array;


+ Object destructuring assignment

const object = { a: 10, b: 20};
const {a, b} = object;

console.log(a); // 10
console.log(b); // 20
*/

// ✅ Rules of Hook 

//  Hook should be summoned at the top of level. 
// multiple useState & useEffect =>  React relies on the order in which Hooks are called.

// ✅  useState
// Hook is a special function for declaring 'state' in a function component + other features.
// 1. syntax: factor => initial value + array => first: variable & second: setter function

function Hook() {
    const [count, setCount ] = useState(0);
    
    return (
        <div>
            <p>{count}</p>
            <button onClick= {
            () => setCount(count + 1)
            }> Click me!
            </button>
            <CleanUp
            // scroll to useEffect #2
             /> 
            <Counter />
            <Info />
             <hr/>
        </div>
    )
}

// 2. declare multiple states
// give each state different varaible name.

// ✅  useEffect (effect = function)
// related what to do after rendering.
// merit: it is located in a component for using 'state' !

// 1. Selective rendering 

// - 1st case: only apply to mounting (first rendering)
// useEffect( () => console.log('it runs at once when mounting.'), []);

// - 2nd case: only apply to 'specific' props' updating
// useEffect( () => console.log(name), [name]);

// 2. Cleanup function = 'returned' function in useEffect.

// - it runs right before updating or unmounting.
// - anonymous fuction, arrow function or named function ok!
// - only apply to unmounting (ex. useEffect([first parameter], []))

/*
function CleanUp() {
    const [visible, setVisible] = useState('💖');

    const onClick = () => {
        if(visible === '💖') {
            setVisible('💔');
        } else {
            setVisible('💖');
        }
    }

    useEffect(() => {
        console.log('effect');
        console.log(visible);
        return () => {
            console.log('clean up!');
            console.log(visible);
        }
    })
    
    return (
    <div>
        <button onClick={onClick}>{visible}</button>
    </div>
);  
}
*/

// ✅ useEffect : Rendering order ✨
/*
const [name, setName] = useState('');

useEffect( () => {
    console.log('a');
    return () => {
        console.log('a-');
    }
})

useEffect( () => {
    console.log('b');
    return () => {
        console.log('b-')
    }
})

    mounting => a b
    unmounting => a- b-
    updating => a b

*/

// ✅ useContext 
// : Accepts a context object and returns the current context value for that context.
// ✔ The current context value is determined by the value prop of the 'nearest' <MyContext.Provider> above the calling component in the tree.
// ✔ When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider.
// Note: the argument to useContext must be the context object itself ❕
/*
    Correct: useContext(MyContext)
    Incorrect: useContext(MyContext.Consumer)
    Incorrect: useContext(MyContext.Provider)
*/
// Note: Putting it together with Context.Provider ❕

// ✅ useReducer: extract update-logic from component 🙌
// when to use? 
// 1. When you have complex state logic that involves multiple sub-values
// 2. When the next state depends on the previous one.

// - syntax
// ✔ 1st parameter: reducer(function)
// ✔ 2nd parameter: specifying the initial state
// ✔ 3rd parameter: passing an init function => The initial state will be set to init. (lazy initialization ❕) 
// ex. const [state, dispatch] = useReducer(reducer, initialArg, init);

/*
const initialCount = 0;

const init = initialCount => {
    return { value: initialCount };
}

const reducer = (state, action) => {
    switch (action.type) {
      case 'RESET':
          return init(action.payLoad);
      case 'INCREMENT':
        return { value: state.value + 1 };
      case 'DECREMENT':
        return { value: state.value - 1 };
      default:
        return state;
    }
  }

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialCount ,init);
 
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'RESET', payLoad: initialCount })}>reset</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};
*/

// ✅ Custom Hook
// it lets you extract component logics into reusable functions.
// JavaScript function whose name starts with ”use” and that may call other Hooks.

// ✅ useCallback
// ❓ Memoization: it is a technique that speeds up the program's execution by removing repeated performance of the same calculation by storing previously calculated values in memory. 
// => Returns a memoized version of the callback that only changes if one of the dependencies has changed.
// => eventually, it prevents functions from being re-produced.
// => useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
/*
    const useValues = (a, b) => {
        return useCallback(() => a+b, [a,b]);
    }

    const value = useValues(1, 2);
    console.log(value); // () => a+b
*/

// ✅ useMemo
// => Returns a memoized value.
/*
    const useValues = (a, b) => {
        return useMemo(() => a+b, [a, b]);
    }

    const value = useValues(1, 2);
    console.log(value); // 3
*/

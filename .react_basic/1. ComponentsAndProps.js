// ✅ Function Component (is similar to Javascript function. )
// turn 'props' into 'react element'
// its name should be capitalized.

/*
import React, {useState}  from 'react';

function ComponentAndProps (prop) {
    return <h1>Hello, {prop.name}!</h1>    
}
*/

// ✅ Props
// determined by parent component.
// its name should be made according to that component itself.

/* 
function App() {
  return (
    <div className="App">
      <PropsAndComponent name='abc' />
    </div>
  );
}
*/
// ✅ defaultProps
// when we do not give property's value in parent component and make 'default' pop-up.

/*
ComponentAndProps.defaultProps = {
	name: 'default name',
};
*/

// ✅ <props>.children
// show contents between component tags.

// ✅ components synthesis
// ❗ warn: one component in one file.
// ❗ warn: only one default export allowed per module.

/*
function Welcome() {
    return (
        <div>
            <ComponentAndProps name='a' />
            <ComponentAndProps name='b' />
            <ComponentAndProps name='c' />
        </div>
    )
}
*/

// ✅ Component extraction.
// go to ComponentExtraction.js file.

// ✅ Props are just used for 'reading'!
// => use 'state'

// ✅ Conditional rendering
// go to ConditionalRendering.js file.
// alternative: conditional operator

/*
function Greeting(props) {
    return (
        <div>
            {
                props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
            }
        </div>
    )
}
*/

// ✅ Null
// return null to keep components from rendering itselt.

// ✅ iterate components => map ✔
// declare a separate variable and include it in JSX
// or embedding map() in JSX

/*
function Welcome() {
    const names = ['a', 'b', 'c', 'd'];
    const nameList = names.map( alphabet => <li>{alphabet}</li>);
    return (
        <div>
            <ul>{nameList}</ul>
        </div>
    )
}
*/

// ✅ list
// ∵ react processes lists 'step by step'
// it is effective to use key in list items of an array.

// ✅ key: special prop 💎 (not passed into component)
// 'key' should be distinctive to other lists in 'same' array
// avoid to use 'index' in an array.
// use 'key' in a list item in context of 'Array' ❗
// => map function should return <li> with key in 'top-ranked component'!

// update & delete
// keep invariability ❗ => concat, filter

/*
function Welcome() {
	const [names, setNames] = useState([
		{ id: 1, text: 'number one' },
		{ id: 2, text: 'number two' },
		{ id: 3, text: 'number three' },
		{ id: 4, text: 'number four' },
	]);

	const [inputText, setInputText] = useState('');
	const [nextId, setNextId] = useState(5);

	const onChange = (e) => setInputText(e.target.value);

	const onClick = () => {
		const nextName = names.concat({
			id: nextId,
			text: inputText,
		});

		setNextId(nextId + 1);
		setNames(nextName);
		setInputText('');
	};

	const onRemove = (clickedId) => {
		const filteredName = names.filter((name) => {
			return name.id !== clickedId;
		});
		setNames(filteredName);
	};

	const namesList = names.map((name) => (
		<li key={name.id} onDoubleClick={() => onRemove(name.id)}>
			{name.text}
		</li>
	));

	return (
		<div>
			<input value={inputText} onChange={onChange} />
			<button onClick={onClick} />
			<ul>{namesList}</ul>
			<hr />
		</div>
	);
}

export default Welcome;
*/
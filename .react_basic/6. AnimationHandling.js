// Tips for event handling.
// - event's name => camelCase (ex. onClick)
// - event handler should  be passed into event's name as a function, not string.
// - preventDefault must be called out.
// - apply animation only to DOM element. (ex. <div>,<button> ... )

/*
function ActionLink() {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('hello');
    
    const onChangeUser = (e) => {
        e.preventDefault();
        setUser(e.target.value);
    }
    
    const onChangeMessage = (e) => {
        e.preventDefault();
        setMessage(e.target.value);
    }

    const onClick = (e) => {
        alert(`${user}: ${message}`);
        setUser('');
        setMessage('');
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            onClick();
        }
    }
  
    return (
        <div>
            <h1>Event handling practice</h1>
            
            <input
            type="text"
            name="message"
            placeholder="write your name."
            onChange={onChangeUser}
            onKeyPress={onKeyPress}
              />

            <input
            type="text"
            name="message"
            placeholder="write your message."
            onChange={onChangeMessage}
            onKeyPress={onKeyPress}
              />

            <button href="#" onClick={onClick} />
            <hr/>
        </div>
    );
  }
*/
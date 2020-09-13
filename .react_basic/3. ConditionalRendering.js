/*
import React, {useState} from 'react';

function UserGreeting() {
    return (
        <h1>Welcome, back!</h1>
    )
}

function GuestGreeting() {
    return (
        <h1>Please, sign up.</h1>
    )
}

function Greeting(props) {
    if(props.isLoggedIn) {
        return(
            <UserGreeting />
        )
    } else {
        return (
            <GuestGreeting />
        )
    }
}

function LogInBtn(props) {
    return (
        <button onClick={props.onClick}>
        LogIn
        </button>
    )
}

function LogOutBtn(props) {
    return (
        <button onClick={props.onClick}>
        LogOut
        </button>
    )
}

function LoginControl() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    let button;

    function handleLoginClick() {
        setLoggedIn(true);
    }

    function handleLogoutClick() {
        setLoggedIn(false);
    }

    if(isLoggedIn) {
        button = <LogOutBtn onClick={handleLogoutClick} />
    } else {
        button = <LogInBtn onClick={handleLoginClick} />
    }
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
            <hr/>
        </div>
    )
}


export default LoginControl;
*/
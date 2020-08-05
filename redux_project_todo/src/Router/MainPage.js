import React, { useState } from 'react';
import styled from 'styled-components';
import SignUp from '../Components/SignUp';
import SignIn from '../Components/SignIn';
import Todo from '../Components/Todo';

const MainPageContainer = styled.div`
    display: flex;
    `

const MainPage = () => {
    const [ signUpId, setSignUpId ] = useState('');
    const [ signUpPassword, setSignUpPassword ] = useState('');
    const [ signInId , setSignInId ] = useState('');
    const [ signInPassword, setSignInPassword] = useState('');

    return(
        <MainPageContainer>
            <SignUp 
                id={signUpId} 
                password={signUpPassword} 
                setId={setSignUpId} 
                setPassword={setSignUpPassword} 
            />
            <SignIn
                signUpId={signUpId}
                signUpPassword={signUpPassword}
                signInId={signInId}
                signInPassword={signInPassword}
                setSignInId={setSignInId}
                setSignInPassword={setSignInPassword}
            />
            <Todo />
        </MainPageContainer>
    )
}

export default MainPage;

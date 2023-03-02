import { Button } from '@material-ui/core';
import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';
import { auth, provider } from './firebase';
import './Login.css';

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        signInWithPopup(auth,provider)
        .then(( result ) => {
            const user = result.user;
            dispatch(
                login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch(error => alert(error.message))
    }; 
  return (
    <div className="login">
        <div className="login__container">
            <img 
                src="https://images.news18.com/ibnlive/uploads/2020/11/1604413203_gmail_logo.jpg?impolicy=website&width=510&height=356" 
                alt="" 
            />
            <Button variant="contained" color="primary" onClick={signIn} >Login</Button>
        </div>
    </div>
  )
}

export default Login
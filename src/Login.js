import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/')
        }).catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();
        
        createUserWithEmailAndPassword(auth, email, password).then((authUser) => {
            // it successfully created a new user with email and password
            if(authUser) {
                navigate('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" className="login_logo" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/> <br />
                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign in</button>
                </form>

                <p className='terms'>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &  Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

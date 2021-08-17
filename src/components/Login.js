import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './Firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const SignUp = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login flex flex-col items-center h-full ">
            <Link to='/'>
                <img
                    className="object-contain w-20 mx-5 mt-3"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUebETYtQSIbfvTLnCEFSJ4ncLw313BXC7PPFFMB1qxBblqvQ&s"
                    alt="logo"
                />
            </Link>
            <div className='login-container flex flex-col p-8 rounded-md border h-auto w-72'>
                <h1 className="text-xl font-bold mb-2">Sign In</h1>
                <form>
                    <h4 className="mb-2 font-bold">
                        E-mail
                    </h4>
                    <input
                        className="mb-3 w-4/5 h-6 border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h4 className="mb-2 font-bold">
                        Password
                    </h4>
                    <input
                        className="mb-3 w-4/5 h-6 border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        onClick={SignIn}
                        className="border border-2 border-yellow-700 rounded mb-3 bg-yellow-500 px-3 py-1">Sign In</button>
                </form>
                <p className='text-xs font-light color-black'>
                    By signing-in you agree to the AMAZONE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button
                    type="submit"
                    onClick={SignUp}
                    className="border border-2 border-gray-700 rounded mt-3 bg-gray-300 py-1"
                >Sign Up</button>
            </div>
        </div>
    )
}

export default Login

import React from 'react';
import './App2.css';
const App2 = () => {
    const Login = () => {
        alert('Signup Successfully');
    }
    return (

        <div className='wrap'>
        
            <form action="">
                <h1>Sign UP</h1>
                
                <div className="input-box">
                    <label><input type="text" placeholder='Firstname' required /></label>
                </div>
        
                <div className="input-box">
                    <input type="text" placeholder='LastName' required />
                </div>

                <div className="input-box">
                    <input type="text" placeholder='Email Address' required />
                </div>

                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirm password' required />
                </div>
                <div className="input-box">
                    <input type="number type" placeholder='Ph no' required />
                </div>

                <button type="button" onClick={Login}>
                    Sign Up
                </button>

                <div className="register-link">
                    <p>Already have an account? <a href="login.js">Login</a></p>
                </div>
            </form>
        </div>
    );
};

export default App2;


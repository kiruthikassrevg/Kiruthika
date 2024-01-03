import React from 'react';
import Login from './App1';
import './App1.css';
const App1 = () => {
    const Login = () => {
        alert('Login Successfully');
    }
    return (

        <div className='wrap'>
        
            <form action="">
                <h1>Login</h1>
                
                <div className="input-box">
                    <input type="text" placeholder='Username / Email' required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                </div>
                <br></br>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="button" onClick={Login}>
                    Login
                </button>

            

                <div className="register-link">
                    <p>Don't have an account? <a href="signup.js">Sign Up</a></p>
                </div>

            </form>
            <App1/>
        </div>
        
    );
};

export default App1;


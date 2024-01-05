import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Login(){
    const Login = () => {
        alert('Login Successfully');
    }
    return(
        <div ClassName='login template d-flex justify-content-center align-items-center vh- 100 bg-primary'>
            <div className='form_container p-5 rounded bg white'>
            <form>
                <center><h3 className='text-center'>Login</h3></center><br></br>
                <div className='mb-2'>
                    <center><label htmlFor="email">Email  :</label><br></br></center>
                    <center><input type="email" placeholder='Enter Email' className='form-control'/></center><br></br>
                </div>
                <div className='mb-2'>
                <center><label htmlFor="password">Password  :</label></center>
                <center><input type="password" placeholder='Enter Password' className='form-control'/></center><br></br>
                </div>
                <div>
                <center><label htmlFor="check" className='custom-input-label ms-2'>
                    <center>Remember me</center>
                    </label></center>
                </div>
                <div className='d-grid'>
                <center><button type="button" onClick={Login}>
                    Login
                </button></center>
                </div>
                <br></br>
                <p className='text-end mt-2'>
                    <center>Forgot password <a href="#"><h1/>Password or </a><Link to="/Signup" className='ms-2'>Sign Up</Link></center>
                </p>
                <br></br>
                <br></br>
            </form>
            </div>
            </div>
    )
}
export default Login;
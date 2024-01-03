import React from "react";
import { Link } from "react-router-dom";
import './style.css';
function Signup(){
    const Login = () => {
        alert('Sign Up Successfully');
    }
    return(
        <div ClassName='signup template d-flex justify-content-center align-items-center vh- 100 bg-primary'>
            <div className='form_container p-5 rounded bg white'>
            <form>
                <center><h3 className='text-center'>Sign Up</h3></center><br></br>
                <div className='mb-2'>
                <center><label htmlFor="email">First name</label>;</center>
                <center><input type="text" placeholder='Enter First name' className='form-control'/></center>
                </div><br></br>
                <div className='mb-2'>
                <center><label htmlFor="email">Last name</label>;</center>
                <center><input type="text" placeholder='Enter Last name' className='form-control'/></center>
                </div><br></br>
                <div className='mb-2'>
                <center><label htmlFor="password">Password</label>;</center>
                <center><input type="password" placeholder='Enter Password' className='form-control'/></center>
                </div><br></br>
            
                <div className='d-grid'>
                <center><button type="button" onClick={Login}>
                    Sign Up
                </button></center>
                </div><br></br>
                <p className='text-end mt-2'>
                <center>Already Registered.<Link to="/" className='ms-2'><h3>Sign in</h3></Link></center>
                </p><br></br>
            </form>
            </div>
            </div>
    )
}
export default Signup;
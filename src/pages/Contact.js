import React from "react";
import { IoIosBusiness, IoMdContact } from "react-icons/io";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TiBusinessCard } from "react-icons/ti";
import './Contact.css';

function Contact()
{
    const Login = () => {
        alert('Message to be sent');
    }
    return(
        <div>
            <div className="container">
            <img src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg=" width={1220}  alt="bg2"></img>
            <div className="center">
                <h1>Contact Us</h1>
            </div>
        </div>
        <div className="moto">
            <center>
            <h1>Get in touch with us for business</h1>
            <br></br>
            <h3>Let's Talk</h3>
                
            <form className="conform">
                <MdDriveFileRenameOutline />
                <label>Name :  </label> 
                <input type="text"></input>
                <br></br><br></br>
                <IoMdContact />
                <label>ph no : </label> 
                <input type="text"></input>
                <br></br><br></br>
                <IoIosBusiness />
                <label>Address : </label> 
                <input type="text"></input>
                <br></br><br></br>
                
                <TiBusinessCard />
                <label>Email : </label>
                <input type="text"></input>
                <br>
                </br>
                <br></br>
                <p>Or</p>
                <br></br>
                <label>Message : </label>
                <input type="text"></input>
                <br></br>
                <br></br>
                <button type="button" onClick={Login}>
                    Send a message
                </button>
            </form>

                </center>
        </div>        </div>
    )
}
export default Contact;
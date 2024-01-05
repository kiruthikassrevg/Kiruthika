import React from 'react';
import fb from '../assets/fbimg.png';
import insta from '../assets/instaimg.png';
import linkedin from '../assets/linkedinimg.png';
import twitter from '../assets/twitterimg.png';
import './footer.css';
const Footer=()=>{
    return(
        <div className="footer">
            <br></br>
<div className="sb_footer section_padding">
    <div className="sb__footer-links">
        <div className="sb__footer-links_div">
            <h3>Partners</h3>
            <a href="/home">
                <p>Madras mundi</p>
            </a>
        
        </div>
        <div className="sb__footer-links_div">
            <h3>Email</h3>
            <a href="/resource">
                <p>kkgrocery@yahoo.com</p>
            </a>
            <a href="/healthplan">
                <p>sribasket@gmail.com</p>
            </a>
            
    </div><div className="sb__footer-links_div">
            <h3>Resources</h3>
            <a href="/employer">
                <p>Help center</p>
            </a>
            <a href="/employer">
                <p>Book a demo</p>
            </a>
            <a href="/employer">
                <p>Book status</p>
            </a>
            </div>
            <div className="sb__footer-links_div">
            <h3>Company</h3>
            <a href="/features">
                <p>Features</p>
            </a>
            <a href="/products">
                <p>Products</p>
            </a>
            <a href="/category">
                <p>Category</p>
            </a>
            <a href="/contact">
                <p>Contact</p>
                </a>
            <a href="/">
                <p>Home</p>
                </a>
            </div>
            <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
                <a href='https://www.facebook.com/'><p><img src={fb} alt=""/></p></a>
                <a href='https://www.instagram.com/?hl=en'><p><img src={insta} alt=""/></p></a>
                <a href='https://www.linkedin.com'><p><img src={linkedin} alt=""/></p></a>
                <a href='https://twitter.com'><p><img src={twitter} alt=""/></p></a>
            </div>
        </div>
</div>
<hr></hr>
<div className="sb__footer-below">
    <div className="sb__footer-copyright">
        <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
    </div>
    <div className="sb__footer-below-links">
        <a href="/terms"><div><p>Terms and Conditions</p></div></a><br></br>
        <a href="/pri"><div><p>Privacy policy</p></div></a>
        <a href="/faqs"><div><p>FAQ</p></div></a>
        <a href="/contact"><div><p>Contact *</p></div></a>

        <br></br>
    </div>
</div>
        </div>
        </div>
        
    )
}
export default Footer;
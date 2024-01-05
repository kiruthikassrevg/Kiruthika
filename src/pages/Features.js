import React from 'react';
import './Fearures.css';
function Features()
{
    
    return(
        <div>

        <br></br>
        
        <div class='box-container'>
            <div class="box">
                <img src='https://cdn.pixabay.com/photo/2022/08/22/21/58/grocery-7404621_1280.png'alt="Avatar"></img>
                <h3>Fresh And Organic</h3>
                <p>We make healthy living possible. Life is better through agriculture.
                    Feeding the world for a better future. Teaming up with nature for a beautiful tomorrow.</p>
                    <br></br>
            <a href='/Read'> <button>Read more</button></a>
            </div>
            <div class="box">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iVZY9S2iCE22cuzXPCCBp03BwIrp_mmX4w&usqp=CAU'alt=""></img>
                <h3>Free Delivery</h3>
                <p>Free delivery is a delivery option for which customers do not pay for shipping charges.
                    Often it's used as a sales and marketing tactic.</p>
                    <br></br>
                <a href='/Deliread'><button>Read more</button></a>
            </div>
            <div class="box">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoe9TiwQ1kOpnyqtHxjFgeGnR5VpZpMISkvw&usqp=CAU'alt=""></img>
                <h3>Easy Payments</h3>
                <p>One way is by offering online payment methods. Consumers value quick, convenient options when it comes to services.
                    The healthcare market is no exception as it’s becoming digital in almost every aspect.</p>
                    <br></br>
                <a href='/Pay'><button>Read more</button></a>
            </div>
            </div>
            <br></br>
            <br></br>
            </div>
            
    )
}
export default Features;
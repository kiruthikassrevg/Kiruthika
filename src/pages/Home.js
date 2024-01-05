
import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
function Home()
{
    return(
        <div>
        <img src='https://img.freepik.com/fotos-kostenlos/flach-legen-gemueserahmen_23-2148516769.jpg' width={1220}></img>
    <div className='center'>
                <h1>Shopping made easy</h1>
                <h3>Harvesting Goodness for You</h3>
    </div>
    <div><h2><center>Explore our range of over 200 items</center></h2></div>
        <div class='box-container'>
            <div class="box">
                <img src='https://img.freepik.com/premium-photo/vegetables-fruits-white_55883-892.jpg' width={200}height={200}></img>
                
                    <br></br>
            <a href='/Category'> <button>Buy</button></a>
            </div>
            <div class="box">
                <img src="https://e7.pngegg.com/pngimages/353/459/png-clipart-sack-of-rice-bag-rice-gunny-sack-hessian-fabric-jute-rice-sacks-food-photography.png" width={200} height={200}></img>
                
                    <br></br>
                <a href='/Category'><button>Buy</button></a>
            </div>
            <div class="box">
                <img src="https://static.javatpoint.com/list/images/list-of-cosmetic-products1.jpg" width={200} height={200}></img>
                
                    <br></br>
                <a href='/Category'><button>Buy</button></a>
            </div>
            <div class="box">
                <img src="https://rajkotunion.coop/images/MilkImg1.jpg" width={200} height={200}></img>
                
                    <br></br>
                <a href='/Category'><button>Buy</button></a>
            </div>
            <div class="box">
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/WA/RR/HY/163771626/mango-fruit-drink.png" width={200} height={200}></img>
                
                    <br></br>
                <a href='/Category'><button>Buy</button></a>
            </div>
            <div class="box">
                <img src="https://cdn.rationatmydoor.com/wp-content/uploads/2019/04/lays-assorted.jpg" width={200} height={200}></img>
                
                
                    <br></br>
                <a href='/Category'><button>Buy</button></a>
            </div>
            </div>
            <br></br>
            <br></br>
            </div>
    )
}

export default Home;
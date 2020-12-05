import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom' 

export default function Home() {
    return (
        <div>
             <nav className="navbar navbar-dark bg-info" >
                <h2 class="navbar-brand mb-0 h1" style={{fontWeight:"bold"}}>Marriott Hotel</h2>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/service">Services</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/register">Register</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="login">Login<span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
            
           <div style={{backgroundImage:"url(https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=2119&height=1195&fit=crop&format=pjpg&auto=webp)",height:"1000px",width:"1390px"}}>
           <div class="d-flex align-items-center">
           <h1  style={{color:" rgb(116, 8, 8)",textAlign:"center"}}>Welcome to Marriott Hotel</h1>
            </div> 
    <p id="hpara" style={{color:"white",fontStyle:"italic"}} >Due to the huge influx of tourists in India, EaseMyTrip offers a wide range of luxury, deluxe and budget hotels to them.<br/> Choose to stay in luxury and comfort with greatest discounts available on hotels bookings.<br/><br/>

          We list classiest budget hotels on our site along with some of the prominent international hotel chains of India including Oberoi Group, ITC Group,<br/> Taj Group, Le Meridian Group and many others. Ranging from class hotels to luxury<br/><br/>
           beach resorts, each hotel on our site gives you a memorable staying experience. Along with deluxe, budget and luxury hotels,<br/> EaseMyTrip also displays a number of heritage hotels for offering you a royal stay. Enjoy cheap hotel deals 
           for any destination with great savings.
           Due to the huge influx of tourists in India, EaseMyTrip offers a wide range of luxury, deluxe and budget hotels to them.<br/> Choose to stay in luxury and comfort with greatest discounts available on hotels bookings.<br/><br/>

          We list classiest budget hotels on our site along with some of the prominent international hotel chains of India including Oberoi Group, ITC Group,<br/> Taj Group, Le Meridian Group and many others. Ranging from class hotels to luxury<br/><br/>
           beach resorts, each hotel on our site gives you a memorable staying experience. Along with deluxe, budget and luxury hotels,<br/> EaseMyTrip also displays a number of heritage hotels for offering you a royal stay. Enjoy cheap hotel deals 
           for any destination with great savings.<br/><br/>
           </p>
 
  
  </div>
  



        </div>
    )
}

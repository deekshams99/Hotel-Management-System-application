import React from 'react'
import {Link} from 'react-router-dom' 


export default function Services() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-info" >
                <h2 class="navbar-brand mb-0 h1">Marriott Hotel</h2>
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
        <div style={{backgroundImage:"url(https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=2119&height=1195&fit=crop&format=pjpg&auto=webp)",backgroundRepeat:"no-repeat",height:"1000px",width:"1400px"}}>
           
            <h2 style={{textAlign:"center",color:"rgb(104, 9, 53)"}}>Our Services</h2><br/>
            <p style={{color:"white",fontStyle:"italic"}}>
            Hotel services, their number and the amount of people engaged in them depends on the size of the hotel as well as on its status. <br/><br/>
            Typically, the basic hotel services include reception guests, room service, food service, including restaurants in the hotel, and security. <br/><br/>
            Sometimes in the small hotels the duties of security, a cook and a cleaner are performed by the owner himself.<br/><br/>
            </p>
<div class="card" style={{width:"15rem"}}>
  <div class="card-body" style={{color:"black"}}>
    <h5 class="card-title"> <i class="fa fa-taxi" aria-hidden="true" ></i></h5>
    <h4>Free Shuttle</h4>
    <p class="card-text">Lorem ipsum dolor sit<br/>
     amet consectetur adipisicing elit.<br/>
      Enim ut iste aperiam. <br/>
      Ipsam reprehenderit reiciendis</p>
  </div>
  
</div>
<div class="card" style={{width:"15rem"}}>
  <div class="card-body" style={{color:"black"}}>
    <h5 class="card-title"> <i class="fa fa-ambulance" aria-hidden="true"></i></h5>
    <h4>Ambulence</h4>
    <p class="card-text">Lorem ipsum dolor sit<br/>
     amet consectetur adipisicing elit.<br/>
      Enim ut iste aperiam. <br/>
      Ipsam reprehenderit reiciendis</p>
  </div>
  
</div>
<div class="card" style={{width:"15rem"}}>
  <div class="card-body" style={{color:"black"}}>
    <h5 class="card-title"> <i class="fa fa-wifi" aria-hidden="true"></i></h5>
    <h4>Free Wifi</h4>
    <p class="card-text">Lorem ipsum dolor sit <br/>
    amet consectetur adipisicing elit. <br/>
    Enim ut iste aperiam. Ipsam<br/>
     reprehenderit reiciendis<br/>
     reprehenderit reiciendis</p>
  </div>
  
</div>
<div class="card" style={{width:"15rem",color:"black"}}>
  <div class="card-body" style={{color:"black"}}>
    <h5 class="card-title"> <i class="fa fa-coffee" aria-hidden="true"></i></h5>
    <h4>Free Cocktails</h4>
    <p class="card-text">Lorem ipsum dolor sit <br/>
    amet consectetur adipisicing elit. <br/>
    Enim ut iste aperiam. Ipsam<br/>
     reprehenderit reiciendis<br/>
     reprehenderit reiciendis
     </p>
  </div>
  
</div>
</div>
        </div>
    )
}

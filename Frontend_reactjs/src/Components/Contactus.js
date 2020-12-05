import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Contactus extends Component {
    render() {
        return (
            <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366_1280.jpg)",height:"1000px",width:"1400px"}}>
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
            </nav> <br/><br/><br/><br/><br/><br/><br/><br/>
              <h4 style={{textAlign:"center",color:"white"}}>For Booking queries</h4>
             <h5 style={{textAlign:"center",color:"white"}}> <i class="fa fa-phone" aria-hidden="true"></i> +91 8956743421</h5>
             <h5 style={{textAlign:"center",color:"white"}}> <i class="fa fa-phone" aria-hidden="true"></i> +91 7621594342</h5>
             <h5 style={{textAlign:"center",color:"white"}}> <i class="fa fa-envelope" aria-hidden="true"></i> +marrit@mat.com</h5><br/><br/>
              {/* <h4 style={{textAlign:"center",color:"white"}}>Follow us on</h4>
             <h5 style={{textAlign:"center",color:"white"}}> <i class="fa fa-instagram" aria-hidden="true"></i></h5>  */}
            </div>
        )
    }
}


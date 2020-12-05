import React from 'react'
import {Link} from 'react-router-dom'
import './Book.css'

export default function Book() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-info" >
                <span class="navbar-brand mb-0 h1">Customer</span>
            
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item10 active">
                        <Link class="nav-link" to="/stru">Gallary</Link>
                    </li>
                </ul> 
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/vroom">Book Room</Link>
                    </li>
                </ul>
                 
                 <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/">Logout</Link>
                    </li>
                </ul> 
            </nav>
            <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2015/05/09/17/09/towel-759980_1280.jpg)",height:"1000px",width:"1400px",backgroundRepeat:"no-repeat"}}>
                <h2 style={{textAlign:"center"}}>Welcome to customer portal</h2>

            </div>
        </div>
    )
}

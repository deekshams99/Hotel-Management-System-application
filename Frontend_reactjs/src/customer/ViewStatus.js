import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Status.css'


export default class ViewStatus extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-info" >
                <h2 class="navbar-brand mb-0 h1" style={{fontWeight:"bold"}}>Customer</h2>
            
                {/* <ul class="navbar-nav mr-auto">
                    <li class="nav-item10 active">
                        <Link class="nav-link" to="/stru">Rooms Galary</Link>
                    </li>
                </ul> 
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/vroom">Book Room</Link>
                    </li>
                </ul> */}
                 
                 <ul class="navbar-nav mr-auto">
                    <li class="nav-item11 active">
                        <Link class="nav-link" to="/">Logout</Link>
                    </li>
                </ul> 
            </nav>

             <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2015/01/07/16/37/wood-591631_1280.jpg)",height:"700px"}}>
            <div className="card col-md-6 offset-md-6" style={{backgroundColor:"white",alignContent:"center"}}>
                <h3 className="text-center">Room book status</h3>
                <div className="card-body">
                    <div className="row">
                        <label style={{color:"brown"}}>Your room is booked Successfully </label>
                        

                    </div>
                    
                </div>
                <p style={{color:"brown"}}>Thanks for choosing our application</p>
            </div>
            </div>
            </div>
        )
    }
}

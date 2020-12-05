import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class AdminHome extends Component {
    render() {
        return (
            <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2018/08/14/11/03/acapulco-3605307_1280.jpg)",height:"1000px",width:"1400px"}}>
                
                <nav class="navbar navbar-dark bg-info" >
                <span class="navbar-brand mb-0 h1" style={{color:"white"}}>Admin Portal</span>
            
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/viewallroom">View All Rooms</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/viewcus">View Customers</Link>
                    </li>
                </ul>
                 <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/viewpay">View Payments</Link>
                    </li>
                </ul> 
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/viewstaff">View staffs</Link>
                    </li>
                </ul>
                 <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/">Logout</Link>
                    </li>
                </ul> 
            </nav>  
            <h1 style={{alignContent:"center",color:"white"}}> Welcome to Admin portal</h1>
            </div>
        )
    }
}

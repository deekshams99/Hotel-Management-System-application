import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PaymentService from '../../services/PaymentService'

export default class ViewPayments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             payment:[]
        }
    }
    componentDidMount(){
        PaymentService.getallpay().then((res)=>{
            this.setState({payment:res.data});
        })
    }
    render() {
        return (
            <div>
                 <nav class="navbar navbar-dark bg-info" >
                 <h2 class="navbar-brand mb-0 h1" style={{fontWeight:"bold"}}>Admin</h2>
            
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
            <div style={{backgroundImage:"url(data:image/jpeg;base64,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)"}}> 
            <h2 style={{textAlign:"center",color:"brown"}}>Payment List</h2>
            <table class="table table-striped">
  <thead>
    <tr>
     
      <th >PaymentId</th>
      <th >Room Number</th> 
      <th >Customer Name</th>
      <th>Phone Number</th>
      <th >RoomCost</th>
      <th >ATM Number</th>
      
    </tr>
  </thead>
  <tbody>
      {
          this.state.payment.map((pay) =>
              <tr key={pay.id}>
                   <td>{pay.paymentId}</td> 
                  <td>{pay.roomId}</td>
                  <td>{pay.custName}</td>
                   <td>{pay.phoneNumber}</td>
                  <td>{pay.roomCost}</td>
                  <td>{pay.atmNumber}</td>
                 
              </tr>
              
          )
      }
      
  </tbody>

                    </table>
                    </div>
            </div>
        )
    }
}

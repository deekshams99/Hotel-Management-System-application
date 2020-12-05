import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import StaffService from '../../services/StaffService'

export default class ViewStaffs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             staffs : []
        }
        this.editStaff=this.editStaff.bind(this);
        this.deleteStaff=this.deleteStaff.bind(this);
    }
    addstaff=(e)=>{
        e.preventDefault()
        this.props.history.push('/addstaff/-1');
    }
    deleteStaff(staffId){
          StaffService.deletestaff(staffId).then(res=>{
              this.setState({staffs:this.state.staffs.filter(staff =>staff.staffId !== staffId )})
          })
    }
    editStaff(staffId){
             this.props.history.push(`/addstaff/${staffId}`);
         }
    componentDidMount(){
        StaffService.getStaff().then((res)=>{
            this.setState({staffs:res.data})
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

             <button style={{alignContent:"right"}} className="btn btn-primary" onClick={this.addstaff}>Add Staff</button>
<div style={{backgroundImage:"url(data:image/jpeg;base64,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)"}}>
         <h2 style={{textAlign:"center",color:"brown"}}>All Staff List</h2>
            <table class="table table-striped table-bordered">
  <thead>
    <tr>
      {/* <th >Id</th> */}
      <th >StaffId</th>
      <th >StaffName</th> 
      <th >StaffSalary</th>
      <th>Actions</th>
      
    </tr>
  </thead>
  <tbody>
      {
          this.state.staffs.map((staff) =>
              <tr key={staff.id}>
                   <td>{staff.staffId}</td> 
                  <td>{staff.staffName}</td>
                  <td>{staff.staffSalary}</td>
                  <td><button className="btn-primary" onClick={()=> this.editStaff(staff.staffId)}>Update</button>
                  <button style={{marginLeft:"20px"}} className="btn-danger" onClick={()=> this.deleteStaff(staff.staffId)}>Delete</button>
                  </td>
                 
                  
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

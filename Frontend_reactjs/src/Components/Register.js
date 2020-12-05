import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RegisterServices from '../services/RegisterServices'
import './Register.css'

export default class Register extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
     
       errors:{
        custId: '',
        custName: '',
        emailId:'',
        phoneNumber:'',
        password:'',
        address: '',
        gender:'',
        // role:''
       }
      
       
    }
    this.changeHandler = this.changeHandler.bind(this);
    // this.changeNameHandler = this.changeNameHandler.bind(this);
    // this.changeEmailHandler = this.changeEmailHandler.bind(this);
    // this.phoneNumberHandler = this.phoneNumberHandler.bind(this);
    // this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.cahngeAddressHandler = this.cahngeAddressHandler.bind(this);
    this.changegenderHandler = this.changegenderHandler.bind(this);
    // this.changeRoleHandler = this.changeRoleHandler.bind(this);
    this.saveCustomer = this.saveCustomer.bind(this);
    // this.errors=this.errors.bind(this);
  }
  saveCustomer=(e)=>{
     e.preventDefault()
    let register = {custName:this.state.custName ,emailId:this.state.emailId,phoneNumber:this.state.phoneNumber,password:this.state.password,address:this.state.address,gender:this.state.gender}
    console.log('register =>' +JSON.stringify(register));
    RegisterServices.createCust(register).then(res =>{
      
      alert("You are succesfully register")
    })
  }
  changeHandler = (event)=>{
    let name =event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;

    switch(name){
      case "custName":errors.custName = value.length<4 ? "Name legth must be atleast 4 charecters":"";
      break;
      case "emailId":errors.emailId =value.length <5 ? " Invalid email":"";
      let apos = value.indexOf('@');
      let dotpos = value.lastIndexOf('.');
  
      if(apos < 1 || dotpos - apos <2){
        errors.emailId ="Please enter valid emailId";
      }
  
      break;
      case "password":errors.password =value.length < 4 ? "password wrong" : "";  
      break;
      case "phoneNumber":errors.phoneNumber=value.length != 10 ? "Phone number should be 10 digits":"";
      break;
      
      default: break;
  }
  console.log(this.state)
  this.setState({errors,[name]:value});
  }
    
  
  // changeEmailHandler = (event)=>{
  //   this.setState({emailId:event.target.value})
    
  // }
  // changePasswordHandler = (event)=>{
  //   this.setState({password:event.target.value})
  // }
  //  phoneNumberHandler = (event)=>{
  //    this.setState({phoneNumber:event.target.value})
  //  }
   cahngeAddressHandler =(event)=>{
     this.setState({address:event.target.value})
   }
   changegenderHandler = (event)=>{
     this.setState({gender:event.target.value})
   }
  //  changeRoleHandler = (event)=>{
  //    this.setState({role:event.target.value})
  //  }
  render() {
    const {errors}=this.state;
    return (
      <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_1280.jpg)",height:"1000px",width:"1400px"}}>

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
                  <h2 style={{textAlign:"center",color:"rgb(104, 9, 53)"}}>Register Here</h2>
                 
                  <form >
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>Name</label>
                    <input type="text" class="form-control"  name="custName" placeholder="enter name" value={this.state.custName} onChange={this.changeHandler} />
                   <p>{errors.custName}</p>
                    
                  </div>
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>Email address</label>
                    <input type="email" class="form-control"   name="emailId" placeholder="enter email" value={this.state.emailId} onChange={this.changeHandler}/>
                    <p>{errors.emailId}</p>
                  </div>
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>Password</label>
                    <input type="password" class="form-control"  name="password" placeholder="enter password" value={this.state.password} onChange={this.changeHandler}/>
                    <p>{errors.password}</p>
                  </div>
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>Phone Number</label>
                    <input type="Number" class="form-control"  name="phoneNumber" placeholder="enter phone Number" value={this.state.phoneNumber} onChange={this.changeHandler}/>
                    <p>{errors.phoneNumber}</p>
                  </div>
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>Addres</label>
                    <input type="text" class="form-control"  name="address" placeholder="enter Address" value={this.state.address} onChange={this.cahngeAddressHandler}/>
                  </div>
                  <div className="form-group">
                  <label>Gender</label>
                  <select id="inputState" className="form-control" value={this.state.gender} onChange={this.changegenderHandler}>
                  <option>Choose here</option>
                  <option>Female</option>
                  <option>Male</option>
                  </select>
                  </div>
        
                     {/* <div class="form-group">
                    <label style={{color:"black"}}>Role</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name="role" placeholder="enter Role" value={this.state.role} onChange={this.changeRoleHandler}/>
                  </div> */}
                  
                  {/* <div className="form-group">
                  <label>Role</label>
                  <select id="inputState" className="form-control" value={this.state.role} onChange={this.changeRoleHandler}>
                  <option>Choose here</option>
                  <option>Admin</option>
                  <option>Customer</option>
                  </select>
                  </div> */}
                  <button type="submit" class="btn btn-dark" onClick={this.saveCustomer}>Register</button>
                </form>
                </div>
              
    )
  }
}




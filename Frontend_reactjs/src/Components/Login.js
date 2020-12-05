import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RegisterServices from '../services/RegisterServices'
import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //  role : '',
            user:[],
            custId:'',
             emailId:'',
             password:'',
             a:''
             
        }
        // this.changeRole = this.changeRole.bind(this);
        this.changeEmail= this.changeEmail.bind(this);
        this.changePassword= this.changePassword.bind(this);
    }

    
    changeEmail =(event)=>{
        this.setState({
            emailId:event.target.value
        })
    }
    changePassword= (event)=>{
        this.setState({
            password:event.target.value
        })
    }
    componentDidMount(){
        let register = {custId:this.state.custId,custName:this.state.custName ,emailId:this.state.emailId,password:this.state.password}
        console.log(this.state.custId)
        console.log('register =>' +JSON.stringify(register));
        RegisterServices.getCustomer().then((res) => {
            this.setState({ user: res.data});
            
              this.state.a = (res.data);
              console.log(this.state.a);
               
        });
      }
    checkRole=(e)=>{
        e.preventDefault()

        for(let i=0;i<this.state.a.length;i++){
            if((this.state.emailId===this.state.a[i].emailId)&&(this.state.password===this.state.a[i].password))
            {
                // alert("Login succesfully as User");
                this.props.history.push("/show")
                console.log("successfully registered as user")
            }
           else if( this.state.emailId === "admin@hsp.com" && this.state.password === "admin")
             {
                // alert("Login succesfully as Admin");
                 this.props.history.push("/admin")
                 console.log("successfully registered as admin")
              }
              else{
                  console.log("invalid user")
              }
              
              
        }
        // alert("invalid user")
        // let role = {role:this.state.role}
        // console.log('role =>' +JSON.stringify(role));
        //  if( this.state.emailId === "admin@hsp.com" && this.state.password === "admin")
        //  {
        //     this.props.history.push("/admin")
        //  }
        //  else if( this.state.emailId === "deeksha@gmail.com" && this.state.password === "deeksha" )
        //  {
        //      this.props.history.push("/show")
        //  }
        //  else if(this.state.emailId === "shreya@gmail.com" && this.state.password === "shreya" )
        //  {
        //      this.props.history.push("/show")
        //  }
        //  else if( this.state.emailId === "jyothi@gmail.com" && this.state.password === "jyothi" )
        //  {
        //      this.props.history.push("/show")
        //  }
        //  else{
        //      alert("invalid user")
        //  }
    }
    render() {
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
            <h2 style={{textAlign:"center",color:"rgb(104, 9, 53)"}}>Login Here</h2>
            
            <form id="lform" name="validform" onsubmit="return validatePassword()">
            <div class="form-group">
              <label style={{color:"firebrick"}}>Email address</label>
              <input type="email" class="form-control" id="emailId" value={this.state.emailId} onChange={this.changeEmail} aria-describedby="emailHelp" placeholder="enter email"/>
            </div>
            <div class="form-group">
              <label style={{color:"firebrick"}}>Password</label>
              <input type="password" class="form-control" id="password" value={this.state.password} onChange={this.changePassword} name="pasword1" placeholder="enter password"/>
            </div>
            {/* <div className="form-group">
                  <label>Role</label>
                  <select id="inputState" className="form-control" value={this.state.role} onChange={this.changeRole}>
                  <option>Choose here</option>
                  <option>Admin</option>
                  <option>Customer</option>
                  </select>
                  </div> */}
            <button type="submit" class="btn btn-dark" onClick={this.checkRole}>Login</button>
          </form>
          
        </div>
        )
    }
}



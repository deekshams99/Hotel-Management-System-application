import React, { Component } from 'react'
import {Link}  from 'react-router-dom';
import PaymentService from '../services/PaymentService';

export default class Payment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            roomId:this.props.match.params.roomId,
            roomCost:this.props.match.params.roomCost,
            custName:'',
            phoneNumber:'',
            errors:{
            
            atmNumber:'',
            cvv:''
            }
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeCustNameHandler = this.changeCustNameHandler.bind(this);
        this.changephoneNumberHandler=this.changephoneNumberHandler.bind(this);
        this.changeHandler= this.changeHandler.bind(this);
         this.changeRoomCostHandler = this.changeRoomCostHandler.bind(this);
        // this.changeatmNumberHandler=this.changeatmNumberHandler.bind(this);
        // this.changeCvvHandler = this.changeCvvHandler.bind(this);
        this.payment= this.payment.bind(this);
    }
    payment=(e)=>{
         e.preventDefault()
        let payment = {roomId:this.state.roomId ,custName:this.state.custName,phoneNumber:this.state.phoneNumber,roomCost:this.state.roomCost,atmNumber:this.state.atmNumber ,cvv:this.state.cvv}
        console.log('payment =>' +JSON.stringify(payment));
        PaymentService.addpayment(payment).then(res =>{
          alert("Your payment is Succesfull and your room also book with in a minute and you will get status of that")
          this.props.history.push('/show');
        })
      }
      changeHandler = (event)=>{
        let name =event.target.name;
        let value = event.target.value;
        let errors = this.state.errors;

        switch(name){
         
          case "atmNumber":errors.atmNumber =value.length != 16 ? " enter correct ATM Number":"";
          break;
          case "cvv":errors.cvv =value.length != 3 ? "enter correct cvv" : "";  
          break;
         
          
          default: break;
      }
      console.log(this.state)
      this.setState({errors,[name]:value});
      }
    changeIdHandler = (event)=>{
        this.setState({roomId:event.target.value})
      }
      changeCustNameHandler=(event)=>{
        this.setState({custName:event.target.value})
      }
      changephoneNumberHandler=(event)=>{
           this.setState({phoneNumber:event.target.value})
      }
       changeRoomCostHandler=(event)=>{
         this.setState({roomCost:event.target.value})
      }
      // changeatmNumberHandler=(event)=>{
      //   this.setState({atmNumber:event.target.value})
      // }
      // changeCvvHandler=(event)=>{
      //   this.setState({cvv:event.target.value})
      // }
    render() {
      const {errors}=this.state;
        return (
            <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_1280.jpg)",height:"1000px",width:"1400px"}}>
                
                <nav class="navbar navbar-light" style={{backgroundColor:"#e3f2fd"}}>
                <h2 class="navbar-brand mb-0 h1" style={{fontWeight:"bold"}}>Customer</h2>
            
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item10 active">
                        <Link class="nav-link" to="/vroom">Book Room</Link>
                    </li>
                </ul>
                {/* <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/viewprofile"></Link>
                    </li>
                </ul> */}
                 <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/">Logout</Link>
                    </li>
                </ul> 
            </nav>
            <h2 style={{textAlign:"center",color:"purple"}}>Here you can make your payment</h2>
                     <form>
                      
                     <div class="form-group">
                    <label style={{color:"firebrick"}}>Room Number</label>
                    <input type="number" class="form-control"  name="roomId"  value={this.state.roomId} onChange={this.changeIdHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>Cutomer Name</label>
                    <input type="text" class="form-control"  name="custName"  value={this.state.custName} onChange={this.changeCustNameHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>Phone Number</label>
                    <input type="number" class="form-control"  name="phnumber"  value={this.state.phoneNumber} onChange={this.changephoneNumberHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>Room Cost</label>
                    <input type="number" class="form-control"  name="roomCost"  value={this.state.roomCost} onChange={this.changeRoomCostHandler}/>
                    <p>{errors.roomCost}</p>
                  </div>
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>ATM Number</label>
                    <input type="number" class="form-control"  name="atmNumber"  value={this.state.atmNumber} onChange={this.changeHandler}/>
                    <p>{errors.atmNumber}</p></div>
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>CVV</label>
                    <input type="password" class="form-control"  name="cvv"  value={this.state.cvv} onChange={this.changeHandler}/>
                    <p>{errors.cvv}</p></div>
                  <button type="submit" class="btn btn-dark" onClick={this.payment}>Make Payment</button>
                     </form>
                
            </div>
        )
    }
}

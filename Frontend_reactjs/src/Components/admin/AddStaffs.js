import React, { Component } from 'react'
import StaffService from '../../services/StaffService'

export default class AddStaffs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             staffId:this.props.match.params.staffId,
             staffName:'',
             staffSalary:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this); 
    }
    componentDidMount(){
        if(this.state.staffId == -1){
            return
            
        }
        else{
            
            StaffService.getonestaff(this.state.staffId).then((res)=>{
                let staff = res.data;
                this.setState({staffName:staff.staffName,
                staffSalary:staff.staffSalary,
            
        });
            });
        }
    }
    saveStaff=(e)=>{
        e.preventDefault()
        let staffs ={staffName:this.state.staffName,staffSalary:this.state.staffSalary}
        console.log('staffs =>' +JSON.stringify(staffs));

        if(this.state.staffId == -1){
            StaffService.addStaff(staffs).then(res=>{
                this.props.history.push("/viewstaff")
            })
        }
        else{
            StaffService.updatestaff(staffs,this.state.staffId).then(res=>{
                this.props.history.push('/viewstaff')
                alert("Updated Succesfully")
            })
        }
       
    }
    changeNameHandler =(event)=>{
        this.setState({staffName:event.target.value})
    }
    changeSalaryHandler=(event)=>{
        this.setState({staffSalary:event.target.value})
    }
    getTitle(){
        if(this.state.staffId == -1){
            return <h2 className="text-center">Add staff </h2>
        }
        else{
            return <h2 className="text-center">Upadate Staff</h2>
        }
    }
    render() {
        return (
            <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_1280.jpg)",height:"1000px",width:"1400px"}}>
                 <form >
                     <div>
                         {
                             this.getTitle()
                         }
                     </div>
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>Name</label>
                    <input type="text" class="form-control"  name="staffName"  value={this.state.staffName} onChange={this.changeNameHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>Staff Salary</label>
                    <input type="number" class="form-control"  name="staffSalary"  value={this.state.staffSalary} onChange={this.changeSalaryHandler}/>
                  </div>
                  <div>
                  <button type="submit" class="btn btn-primary" onClick={this.saveStaff}>Save</button>
                  <button  className="btn btn-danger" onClick={this.cancel} > Cancel</button>
                  </div>
                  </form>
            </div>
        )
    }
}

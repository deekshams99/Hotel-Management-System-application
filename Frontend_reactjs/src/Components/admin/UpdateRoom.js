import React, { Component } from 'react'
import RoomService from '../../services/RoomService';

export default class UpdateRoom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             roomId :this.props.match.params.roomId,
             roomType:'',
             roomCost :'',
             isOccupied:''
        }
        // this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeRoomTypeHandler = this.changeRoomTypeHandler.bind(this);
        this.changeRoomCostHandler = this.changeRoomCostHandler.bind(this);
        this.changeOccupiedHandler = this.changeOccupiedHandler.bind(this);
        this.editRoom= this.editRoom.bind(this);
    }
    componentDidMount(){
        
        if(this.state.roomId == -1){
            return
            
        }
        else{
            
            RoomService.getroombyid(this.state.roomId).then((res)=>{
                let room = res.data;
                this.setState({roomType:room.roomType,
                roomCost:room.roomCost,
            isOccupied:room.isOccupied
        });
            });
        }
        
    }
    cancel=(e)=>{
        e.preventDefault()
        this.props.history.push('/admin')
    }
    editRoom=(e)=>{
        e.preventDefault()
        let rooms ={roomType:this.state.roomType,roomCost:this.state.roomCost,isOccupied:this.state.isOccupied}
        console.log('rooms =>' +JSON.stringify(rooms));

        if(this.state.roomId == -1){
            RoomService.addroom(rooms).then(res=>{
              this.props.history.push('/viewallroom')
              
            })
            
        }
        else{
            console.log(this.state.roomId)
            RoomService.updateroom(rooms,this.state.roomId,this.state.roomCost).then(res=>{
                if(this.state.isOccupied == 1){
                    this.props.history.push('/status')
                    alert("Updated Succesfully")
                }
                else{
                    this.props.history.push('/viewallroom')
                    alert("Updated Succesfully")
                }
                
            })
        }
        
        
    }
      changeIdHandler =(event)=>{
          this.setState({roomId:event.target.value})
      }
    changeRoomTypeHandler =(event)=>{
        this.setState({roomType:event.target.value})
    }
    changeRoomCostHandler =(event)=>{
        this.setState({roomCost:event.target.value})
    }
    changeOccupiedHandler =(event)=>{
        this.setState({isOccupied:event.target.value})
    }
    getTitle(){
        if(this.state.roomId == -1){
            return <h2 className="text-center">Add Room </h2>
        }
        else{
            return <h2 className="text-center">Upadate Room</h2>
        }
    }
    render() {
        return (
            <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_1280.jpg)",height:"1000px",width:"1400px"}}>
                <form >
                  {/* <div class="form-group">
                    <label style={{color:"black"}}>roomId</label>
                    <input type="number" class="form-control"  name="roomId"  value={this.state.roomId} onChange={this.changeIdHandler}/>
                  </div>  */}
                  <div>
                      {
                          this.getTitle()
                      }
                  </div>
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>Room Type</label>
                    <input type="text" class="form-control"  name="roomType"  value={this.state.roomType} onChange={this.changeRoomTypeHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>Room Cost</label>
                    <input type="number" class="form-control"  name="roomCost"  value={this.state.roomCost} onChange={this.changeRoomCostHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"firebrick"}}>IsOccupied</label>
                    <input type="number" class="form-control"  name="isOccupied"  value={this.state.isOccupied} onChange={this.changeOccupiedHandler}/>
                  </div>
                  
                  <button  type="submit" class="btn btn-primary" onClick={this.editRoom}>Save</button>
                  
                  
                  <button  className="btn btn-danger" onClick={this.cancel} > Cancel</button>
                  
                  </form>
            </div>
        )
    }
}


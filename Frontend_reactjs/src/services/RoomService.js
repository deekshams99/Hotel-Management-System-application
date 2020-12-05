import axios from 'axios'

const url1 ="http://localhost:8080/getvaccant"
const url2 = "http://localhost:8080/getallroom"
const url3 ="http://localhost:8080/getoneroom"
const url4 ="http://localhost:8080/updateroom"
const url5 ="http://localhost:8080/addroom"
const url6 ="http://localhost:8080/deleteroom"

class RoomService {

    getvaccantroom(){
        return axios.get(url1);
    }

    getallroom(){
        return axios.get(url2)
    }

    getroombyid(roomId){
        return axios.get(url3+'/' + roomId)
    }
    updateroom(rooms,roomId,roomCost){
        return axios.put(url4+'/'+ roomId+'/'+roomCost,rooms)
    }
    addroom(rooms){
        return axios.post(url5,rooms);
    }
    deleteroom(roomId){
              return axios.delete(url6+'/'+roomId)
    }
}
export default new RoomService();
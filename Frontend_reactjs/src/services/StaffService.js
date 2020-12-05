import axios from 'axios'

const url1 ="http://localhost:8080/getstaff"
const url2 ="http://localhost:8080/addstaff"
const url3 ="http://localhost:8080/updatestaff"
const url4 ="http://localhost:8080/getonestaff"
const url5 ="http://localhost:8080/deletestaff"
class StaffService {
    
getStaff(){
return axios.get(url1);
}
addStaff(staffs){
    return axios.post(url2,staffs)
}

updatestaff(staffs,staffId){
 return axios.put(url3+'/'+staffId,staffs)
}
getonestaff(staffId){
    return axios.get(url4+'/'+staffId)
}
deletestaff(staffId){
    return axios.delete(url5+'/'+staffId)
}
}

export default new StaffService();
import axios from 'axios';
const url1 ="http://localhost:8080/addcust"
const url2 ="http://localhost:8080/getallcust"
class RegisterServices {
createCust(register){
    return axios.post(url1,register);
}

getCustomer(){
    return axios.get(url2);
}
}

export default new RegisterServices();
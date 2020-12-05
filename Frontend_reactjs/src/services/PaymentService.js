import axios from 'axios'
const url1 ="http://localhost:8080/addpay"
const url2 ="http://localhost:8080/getallpay"
class PaymentService{
addpayment(payment){
    return axios.post(url1,payment)
}
getallpay(){
   return axios.get(url2);
}
}
export default new PaymentService();
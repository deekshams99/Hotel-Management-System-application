import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom' 
import './App.css';
import Home from './Components/Home';
import Services from './Components/Services';
import Register from './Components/Register';
import Login from './Components/Login';
import Book from './Components/Book';
import Book2 from './Components/Book2';
import AdminHome from './Components/admin/AdminHome';
import ViewCustomer from './Components/admin/ViewCustomer';
import ViewStaffs from './Components/admin/ViewStaffs';
import AddStaffs from './Components/admin/AddStaffs';
import ViewAllRooms from './Components/admin/ViewAllRooms';
import GetVaccantRoom from './customer/GetVaccantRoom';
import UpdateRoom from './Components/admin/UpdateRoom';
import Payment from './customer/Payment';
import ViewPayments from './Components/admin/ViewPayments';
import ViewStatus from './customer/ViewStatus';
import Contactus from './Components/Contactus';



function App() {
  return (
    <diV>
      <Router>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route  exact path="/service" component={Services}/>
          <Route  exact path="/register" component={Register}/>
          <Route  exact path="/login" component={Login}/>
          <Route  exact path="/contact" component={Contactus}/>
          <Route  exact path="/show" component={Book}/>
          <Route  exact path="/stru" component={Book2}/>
          <Route  exact path="/admin" component={AdminHome}/>
          <Route  exact path="/viewcus" component={ViewCustomer}/>
          <Route  exact path="/viewstaff" component={ViewStaffs}/>
          <Route  exact path="/addstaff/:staffId" component={AddStaffs}/>
          <Route  exact path="/viewallroom" component={ViewAllRooms}/>
          <Route  exact path="/vroom" component={GetVaccantRoom}/>
          <Route  exact path="/updateroomm/:roomId/:roomCost" component={UpdateRoom}/>
          <Route  exact path="/payment/:roomId/:roomCost" component={Payment}/>
          <Route  exact path="/viewpay" component={ViewPayments}/>
          <Route  exact path="/status" component={ViewStatus}/>
        </Switch>
      </Router>
    </diV>
  );
}

export default App;

import React from 'react'
import {Link} from 'react-router-dom'
export default function Book2() {
    return (
        <div>
          <nav class="navbar navbar-dark bg-info" >
          <h2 class="navbar-brand mb-0 h1" style={{fontWeight:"bold"}}>Customer</h2>
            
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item10 active">
                        <Link class="nav-link" to="/stru">Gallary</Link>
                    </li>
                </ul> 
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/vroom">Book Room</Link>
                    </li>
                </ul>
                 
                 <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/">Logout</Link>
                    </li>
                </ul> 
            </nav>
            <h2 style={{textAlign:"center",color:"purple"}}>Rooms Gallary</h2>
            <div class="card-group">
            <div class="card" style={{width: "30rem"}}>
  <img src="https://cdn.pixabay.com/photo/2016/11/21/16/21/bed-1846251_1280.jpg" class="card-img-top" alt="..."/>
  
  </div>
  <div class="card" style={{width: "30rem"}}>
  <img src="https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_1280.jpg" class="card-img-top" alt="..."/>
  </div>
</div>

<div class="card-group">
<div class="card" style={{width: "30rem"}}>
  <img src="https://cdn.pixabay.com/photo/2018/06/14/21/15/the-interior-of-the-3475656_1280.jpg" class="card-img-top" alt="..."/>
  </div>
   <div class="card" style={{width: "30rem"}}>
  <img src="https://cdn.pixabay.com/photo/2017/08/10/07/32/hotel-room-2619509_1280.jpg" class="card-img-top" alt="..."/>
  </div>
</div>

<div class="card-group">
 <div class="card" style={{width: "30rem"}}>
  <img src="https://cdn.pixabay.com/photo/2016/03/16/22/17/hotel-room-1261900_1280.jpg" class="card-img-top" alt="..."/>
  </div>
  <div class="card" style={{width: "30rem"}}>
  <img src="https://cdn.pixabay.com/photo/2014/05/17/18/03/lobby-346426_1280.jpg" class="card-img-top" alt="..."/>
  </div>
  </div>
  
<div class="card-group">
     <div class="card" style={{width: "30rem"}}>
  <img src="https://cdn.pixabay.com/photo/2017/08/10/07/32/hotel-room-2619509_1280.jpg" class="card-img-top" alt="..."/>
  </div>
  <div class="card" style={{width: "30rem"}}>
  <img src="https://cdn.pixabay.com/photo/2016/04/15/11/45/hotel-1330841_1280.jpg" class="card-img-top" alt="..."/>
  </div>
</div>

<div class="card-group">
            <div class="card" style={{width: "30rem"}}>
  <img src="https://cdn.pixabay.com/photo/2016/11/21/16/21/bed-1846251_1280.jpg" class="card-img-top" alt="..."/>
  
  </div>
  <div class="card" style={{width: "30rem"}}>
  <img src="https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_1280.jpg" class="card-img-top" alt="..."/>
  </div>
</div>

        </div>
    )
}

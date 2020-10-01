import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Profile from './pages/Profile/Profile';
import TrangChu from './pages/TrangChu/TrangChu';
import DemoHOC from './pages/HOC/DemoHOC';
import { HomeTemplate } from './templates/HomeTeaplate';
import { AdminTemplate } from './templates/AdminTemPlate';
import FilmsManager from './pages/Admin/FilmAnager/FilmsManager';
import UserManager from './pages/Admin/UserManager/UserManager';
import Booking from './pages/Booking/Booking';
function App() {
  return (
    <BrowserRouter>

      <Switch>
        <HomeTemplate exact path='/home' Component = {Home}/>
        <HomeTemplate exact path='/contact' Component={Contact}/>
        <HomeTemplate exact path='/about' Component={About}/>
        <HomeTemplate exact path='/hoc' Component={DemoHOC}/>
        <HomeTemplate exact path='/login' Component={Login}/>
        <HomeTemplate exact path='/detail/:id' Component={Detail}/>
        <HomeTemplate exact path='/profile' Component={Profile}/>
        <HomeTemplate exact path='/trangchu' Component={TrangChu}/>
        <AdminTemplate exact path='/admin/films' Component={FilmsManager} />
        <AdminTemplate exact path='/admin/users' Component={UserManager} />
        <Route exact path='/booking/:maLichChieu' render={(propsRoute)=>{
          return <Booking {...propsRoute} />
        }} />

        {/* <Route exact path='/login' render={(props) => {return (<div>
          <Header {...props} />
          <Login {...props} />
        </div>

        )}}/> */}
        <Route exact path='/' component={Home}/>
        <Route exact path='*' component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
    // <div className="App">
    //   hello react cyberlearn
    // </div>
  );
}

export default App;

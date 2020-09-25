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
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/detail/:id' component={Detail}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/trangchu' component={TrangChu}/>
        

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

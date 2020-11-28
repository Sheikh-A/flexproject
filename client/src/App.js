import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import StudioGibli from './components/StudioGibli';
import Countries from './components/Countrys';
import Flexport from './components/Flexport';
import FlexportShipments from './components/FlexportShipments';
import AddClient from './components/AddClient.js';
import logo from './assets/logo.png';
import AddShipment from './components/AddShipment';
import Button from './Button';



function App(props) {


    const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)

    const logout = _ => {
      localStorage.removeItem("token");
      setLogged(false)
    }


  return (
    <div className="app">
      <div className="navigation">
        { logged ? null : <NavLink to = '/register'><button>Register</button></NavLink>}
        { logged ? <NavLink to = '/'><Button type="danger" onClick={logout}>Logout</Button></NavLink> : <NavLink to = '/login'><button>Login</button></NavLink>}
        <NavLink to = '/flexportdata'><Button type="primary">Clients</Button></NavLink>
        <NavLink to = '/flexportshipments'><Button type="success">Shipments</Button></NavLink>
        <NavLink to = '/countrieslist'><Button type="primary">View Countries</Button></NavLink>
        <NavLink to = '/StudioGibli'><Button type="success">Studio Gibli</Button></NavLink>
        <NavLink to = '/flexCustomer'><Button type="primary">Add Client</Button></NavLink>
        <NavLink to = '/flexShipment'><Button type="success">Add Shipment</Button></NavLink>


      </div>
      <Route path = '/register' component = {Register} />
      <Route path = '/login' render = {(props) => <Login {...props} setLogged={setLogged} />} />
      <Route path = '/StudioGibli' render = {(props) => <StudioGibli {...props} />} />
      <Route path = '/countrieslist' render = {(props) => <Countries {...props} />} />
      <Route path = '/flexportdata' render = {(props) => <Flexport {...props} />} />
      <Route path = '/flexportshipments' render = {(props) => <FlexportShipments {...props} />} />
      <Route path = '/flexCustomer' render = {(props) => <AddClient {...props} />} />
      <Route path = '/flexShipment' render = {(props) => <AddShipment {...props} />} />


      <Route exact path = '/' render={() =>
      <div className="welcome">
        <NavLink to='/login'><img alt="logo of a lock in a hand" src={logo} /></NavLink>
      </div>
      } />

  </div>
  );
}

export default App;

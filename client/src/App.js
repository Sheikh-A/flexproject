import React, {useState} from 'react';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Countries from './components/Countrys';
import Flex from './components/Flex';
import FlexShipments from './components/FlexShipments';
import AddClient from './components/AddClient.js';
import logo from './assets/logo.png';
//import AddShipment from './components/AddShipment';

import PetGrid from "./components/PetGrid";



function App(props) {


    const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)

    const logout = _ => {
      localStorage.removeItem("token");
      setLogged(false)
    }

    // <NavLink to = '/flexCustomer'><button type="success">Add Client</button></NavLink>
    //     <NavLink to = '/flexShipment'><button type="success">Add Shipment</button></NavLink>


    // <Route path = '/flexCustomer' render = {(props) => <AddClient {...props} />} />
    // <Route path = '/flexShipment' render = {(props) => <AddShipment {...props} />} />
  return (
    <div className="App">
      <div className="navigation">
        { logged ? null : <NavLink to = '/register'><button>Register</button></NavLink>}
        { logged ? <NavLink to = '/'><button onClick={logout}>Logout</button></NavLink> : <NavLink to = '/login'><button>Login</button></NavLink>}
        <NavLink to = '/flexdata'><button >Clients</button></NavLink>
        <NavLink to = '/flexshipments'><button >Shipments</button></NavLink>
        <NavLink to = '/flexCustomer'><button type="success">Add Client</button></NavLink>
        <NavLink to = '/countrieslist'><button >Countries</button></NavLink>

        <NavLink to = '/flexpups'><button>Flex Pups!</button></NavLink>



      </div>
      <Route path = '/register' component = {Register} />
      <Route path = '/login' render = {(props) => <Login {...props} setLogged={setLogged} />} />
      <Route path = '/flexCustomer' render = {(props) => <AddClient {...props} />} />
      <Route path = '/countrieslist' render = {(props) => <Countries {...props} />} />
      <Route path = '/flexdata' render = {(props) => <Flex {...props} />} />
      <Route path = '/flexshipments' render = {(props) => <FlexShipments {...props} />} />

      <Route path = '/flexpups' render = {(props) => <PetGrid {...props} />} />


      <Route exact path = '/' render={() =>
      <div>
        <h1 className="logoheader">🄰🄻🄸🄿🄾🅁🅃</h1>
        <NavLink to='/login'><img className="ship" alt="logo ship" src={logo} /></NavLink>
      </div>
      } />

  </div>
  );
}

export default App;

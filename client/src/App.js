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
import Countries from './components/Countrys';
import Flex from './components/Flex';
import FlexShipments from './components/FlexShipments';
import AddClient from './components/AddClient.js';
import logo from './assets/logo.png';
import AddShipment from './components/AddShipment';
import Button from './Button';
import PetGrid from "./components/PetGrid";



function App(props) {


    const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)

    const logout = _ => {
      localStorage.removeItem("token");
      setLogged(false)
    }


  return (
    <div className="app">
      <div className="navigation">
        { logged ? null : <NavLink to = '/register'><Button type="danger">Register</Button></NavLink>}
        { logged ? <NavLink to = '/'><Button type="danger" onClick={logout}>Logout</Button></NavLink> : <NavLink to = '/login'><Button type="danger">Login</Button></NavLink>}
        <NavLink to = '/flexdata'><Button type="primary">Clients</Button></NavLink>
        <NavLink to = '/flexshipments'><Button type="primary">Shipments</Button></NavLink>
        <NavLink to = '/countrieslist'><Button type="primary">View Countries</Button></NavLink>
        <NavLink to = '/flexCustomer'><Button type="success">Add Client</Button></NavLink>
        <NavLink to = '/flexShipment'><Button type="success">Add Shipment</Button></NavLink>
        <NavLink to = '/flexpups'><Button type="warning">Flex Pups!</Button></NavLink>



      </div>
      <Route path = '/register' component = {Register} />
      <Route path = '/login' render = {(props) => <Login {...props} setLogged={setLogged} />} />

      <Route path = '/countrieslist' render = {(props) => <Countries {...props} />} />
      <Route path = '/flexdata' render = {(props) => <Flex {...props} />} />
      <Route path = '/flexshipments' render = {(props) => <FlexShipments {...props} />} />
      <Route path = '/flexCustomer' render = {(props) => <AddClient {...props} />} />
      <Route path = '/flexShipment' render = {(props) => <AddShipment {...props} />} />
      <Route path = '/flexpups' render = {(props) => <PetGrid {...props} />} />


      <Route exact path = '/' render={() =>
      <div className="welcome">
        <NavLink to='/login'><img alt="logo of a lock in a hand" src={logo} /></NavLink>
      </div>
      } />

  </div>
  );
}

export default App;


import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import {Switch,Route} from 'react-router-dom';

class App extends Component {
  render(){
    return (
    <>

    <Navbar/>
    <Switch>
      <Route path="/"component={ProductList}/>
      <Route path="/details"component={Details}/>
      <Route path="/cart"component={Cart}/>
      <Route component={Default}/>
   </Switch>
 
    </>
    
      );
  }
}

export default App;

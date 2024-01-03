import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import FAQ from './footer/faqs';
import Footer from './footer/footer';
import Privacy from './footer/pri';
import Terms from './footer/terms ';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Home from "./pages/Home";
import Login from './pages/Login';
import Products from './pages/Products';
import Signup from './pages/Signup';

function App()
{
  return(
    <React.Fragment>
    <Navbar />

      <Routes>
      
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/products" exact element={<Products/>}></Route>
      <Route path="/category" exact element={<Category/>}></Route>
      <Route path="/contact" exact element={<Contact/>}></Route>
      <Route path="/terms" exact element={<Terms and Conditions/>}></Route>
      <Route path="/faqs" exact element={<FAQ/>}></Route>
      <Route path="/pri" exact element={<Privacy and policy/>}></Route>
      <Route path="/login" exact element={<Login/>}></Route>
      <Route path="/signup" exact element={<Signup/>}></Route>
    
      
      </Routes>
        <Footer/>
        </React.Fragment>
        
  );
}
export default App;
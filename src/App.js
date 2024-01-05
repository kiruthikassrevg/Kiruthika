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
import Features from './pages/Features';
import Read from './components/Read';
import Deliread from './components/Deliread';
import Pay from './components/Pay';
function App()
{
  return(
    <React.Fragment>
    <Navbar />

      <Routes>
      
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/features" exact element={<Features/>}></Route>
      <Route path="/products" exact element={<Products/>}></Route>
      <Route path="/category" exact element={<Category/>}></Route>
      <Route path="/contact" exact element={<Contact/>}></Route>
      <Route path="/terms" exact element={<Terms and Conditions/>}></Route>
      <Route path="/faqs" exact element={<FAQ/>}></Route>
      <Route path="/pri" exact element={<Privacy and policy/>}></Route>
      <Route path="/login" exact element={<Login/>}></Route>
      <Route path="/signup" exact element={<Signup/>}></Route>
      <Route path="/read" exact element={<Read/>}></Route>
      <Route path="/deliread" exact element={<Deliread/>}></Route>
      <Route path="/pay" exact element={<Pay/>}></Route>
    
      
      </Routes>
        <Footer/>
        </React.Fragment>
        
  );
}
export default App;
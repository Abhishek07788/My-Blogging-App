import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../Blogging/About';
import Blog from '../Blogging/Blog';
import Edit from '../Blogging/Edit';
import Home from '../Blogging/Home';
import Interview from '../Blogging/Interview';
import Login from '../Blogging/Login'
import News from '../Blogging/News'
import Signup from '../Blogging/Signup'
import PrivateRoute from '../Private/PrivateRoute';

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/news" element={<PrivateRoute><News /></PrivateRoute>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/blog" element={<PrivateRoute><Blog /></PrivateRoute>}/>
        <Route path="/edit" element={<PrivateRoute><Edit /></PrivateRoute>}/>
        <Route path="/interview" element={<PrivateRoute><Interview /></PrivateRoute>}/>
        <Route path="/about" element={<About />}/>
    </Routes>
  )
}

export default Routing
import React, { Component } from "react";
import Login from '../src/components/login'
import Signup from "./components/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ProtectedRoute from "./ProtectedRoute";


class App extends Component {
    render() {
            return (  
                <BrowserRouter>
                 <Routes> 
                    <Route path= '/login' name='Login' element= {<Login />} />
                    <Route path= '/signup' name='Signup' element= {<Signup />}/>
                </Routes>
                <ProtectedRoute path="/home" element={<Home />} />
                 </BrowserRouter>
            );
    }
}
 
export default App;
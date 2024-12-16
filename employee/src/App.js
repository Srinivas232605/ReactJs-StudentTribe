import React from 'react';

import './App.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route,useParams } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


function App() {
const {id}=useParams()
console.log({id})

  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Routes> 
                          <Route path = "/" exact component = {<ListEmployeeComponent />}></Route>
                          <Route path = "/employees" element = {<ListEmployeeComponent />}></Route>
                          <Route path = "/add-employee" element = {<CreateEmployeeComponent id={"_add"}/>}></Route>
                          <Route path = "/view-employee/:id" component = {<ViewEmployeeComponent/>}></Route>
                          <Route path = "/update-employee/:id" component = {<UpdateEmployeeComponent/>}></Route>
                    </Routes>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;

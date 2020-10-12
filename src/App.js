import React from 'react';
import './App.css';
import ListUsers from './components/ListUsers';
import Navbar from "./components/Navbar"
import {BrowserRouter as Router,Route} from "react-router-dom"
import AddUser from './components/AddUser';
import UpdateUser from "./components/UpdateUser"

function App() {
  return (
    <div>
      
      <Router>
        <Navbar/>
          <div className="container">
            
              <Route exact path="/" component={ListUsers}/>
              <Route exact path="/users" component={ListUsers}/>
              <Route exact path="/add-user" component={AddUser}/>
              <Route exact path="/edit-user/:id" component={UpdateUser}/>
            
          </div>
      </Router>
      
    </div>
  );
}

export default App;

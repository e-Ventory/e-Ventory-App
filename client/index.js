import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import LoginSignupContainer from './containers/LoginSignupContainer.jsx';
import AccountPageContainer from './containers/AccountPageContainer.jsx';
import InventoryPageContainer from './containers/InventoryPageContainer.jsx';
import NoPage from './components/NoPage.jsx';

export default function App() {
//use state hook
const [user, setUser] = useState({});
console.log('user', user);


  return ( 
    <Router>
      <Navbar user={user}/>
      <Routes>
        <Route path='/' element={<LoginSignupContainer setUser = {setUser}/>} />
        <Route path='/account' element ={<AccountPageContainer user = {user}/>} />
        <Route path='/inventory' element ={<InventoryPageContainer user = {user}/>} />
        <Route path='*' element ={<NoPage user = {user}/>} />
      </Routes>
    </Router>
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
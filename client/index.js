import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import LoginSignupContainer from './containers/LoginSignupContainer.jsx';
import AccountPageContainer from './containers/AccountPageContainer.jsx';
import InventoryPageContainer from './containers/InventoryPageContainer.jsx';
import NoPage from './components/NoPage.jsx';

export default function App() {
  return ( 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LoginSignupContainer />} />
        <Route path='/account' element ={<AccountPageContainer />} />
        <Route path='/inventory' element ={<InventoryPageContainer />} />
        <Route path='*' element ={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../stylesheets/NavBar.scss';

import AccountPageContainer from '../containers/AccountPageContainer.jsx';
import InventoryPageContainer from '../containers/InventoryPageContainer.jsx';
import LoginSignupContainer from '../containers/LoginSignupContainer.jsx';


/*
Navigation Bar Displayed at the top of every page

Will contain on not logged in page:
  Logo,
  Links:
    About Company,

will contain on logged in age:
  Logo,
  Links:
    Account
    Inventory
  Profile Icon
*/

const NavbarLoggedOut = () => {
  return (
    <div className='LoggedOut'>
     <img className='logo' src="https://static.wixstatic.com/media/380eea_d2d6e4ed1151439b8d4d18f1e3950d5b~mv2.png/v1/fill/w_320,h_320,al_c,usm_0.66_1.00_0.01,enc_auto/Inventory2.png" />
     <h1 className='brand' >eVentory</h1>
     {/* <h2 className='subHeader'>Inventory Made Easy</h2> */}
     <a href="aboutUs" className='deadLink1'> About Us </a>
     <a href="packages" className='deadLink2'> Packages </a>
    </div>
  );
};

export default NavbarLoggedOut;
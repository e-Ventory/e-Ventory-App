import React from 'react';
import { Outlet, Link } from "react-router-dom";

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
     <h1>Logo</h1>
     <Link to='/account' >Account</Link>
     <Link to='/inventory'>Inventory</Link>
     <h2>profile pic</h2>
    </div>
  );
};

export default NavbarLoggedOut;
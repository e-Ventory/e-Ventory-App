import React from 'react';
// import AddItem from '../components/AddItem.jsx';
import InventoryDisplay from '../components/InventoryDisplay.jsx';


const InventoryPageContainer = (props) => {
  return (
    <div>
      <h3>Inventory</h3>
      {/* <AddItem /> */}
      <InventoryDisplay user={props.user}/>
    </div>
  );
};

export default InventoryPageContainer;
import React from 'react';
import AddItem from '../components/AddItem.jsx';
import InventoryDisplay from '../components/InventoryDisplay.jsx';


const InventoryPageContainer = () => {
  return (
    <div>
      <h3>Inventory</h3>
    
      <InventoryDisplay />
      <AddItem />
    </div>
  );
};

export default InventoryPageContainer;
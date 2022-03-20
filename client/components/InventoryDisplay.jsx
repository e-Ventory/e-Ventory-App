import React from 'react';
import Inventory from './Inventory.jsx';
//import AddItem from './AddItem.jsx';
import '../stylesheets/Inventory.scss';

const InventoryDisplay = () => {
  
  // const array = [
  // ]

  // something.forEach(array.push(<Inventory /><button>Update</button><button>Delete</button>))
  return (
    <div>
      <div className = 'inventory-labels'>
        <h4 className = 'column'>ID</h4>
        <h4 className = 'column'>NAME</h4>
        <h4 className = 'column'>QUANTITY</h4>
        <h4 className = 'column'>CATEGORY</h4>
        <h4 className = 'column'>LOCATION</h4>
      </div>
      {/* whole div needs to be added per item in inventory array */}
      <div className = "inventory-container">
        <Inventory /> 
          <div className = "button-container">
            <button>Update</button>
            <button>Delete</button>
          </div>
      </div>
      
    </div>

  );
};

export default InventoryDisplay;
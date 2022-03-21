import React from 'react';
import Inventory from './Inventory.jsx';
import Popup from 'reactjs-popup';
//import AddItem from './AddItem.jsx';
import '../stylesheets/Inventory.scss';
import { useForm } from 'react-hook-form';

const InventoryDisplay = () => {
  
  const onUpdateSubmit = data => {
    alert(JSON.stringify(data));
  }

  const { handleSubmit, redister, errors, control } = useForm();
  // const array = [
  // ]

  // something.forEach(array.push(<Inventory /><button>Update</button><button>Delete</button>))
  return (
    <div class ='all-inventory'>
      <div className = 'inventory-labels'>
        <h4 className = 'id-column'>ID</h4>
        <h4 className = 'other-column'>NAME</h4>
        <h4 className = 'quantity-column'>QUANTITY</h4>
        <h4 className = 'other-column'>CATEGORY</h4>
        <h4 className = 'other-column'>LOCATION</h4>
      </div>
      
      {/* whole div needs to be added per item in inventory array */}
      <div className = 'scroll'>
       <Inventory />
       <Inventory />
       <Inventory />
       <Inventory />
       <Inventory />
       <Inventory />
       <Inventory />
       <Inventory />
       <Inventory />
       <Inventory />
       <Inventory />
       <Inventory />
       <Inventory />
       <Inventory />
       <Inventory />
      </div>

    </div>

  );
};

export default InventoryDisplay;
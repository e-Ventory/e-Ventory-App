import React, { useEffect, useState } from 'react';
import Inventory from './Inventory.jsx';
import Popup from 'reactjs-popup';
//import AddItem from './AddItem.jsx';
import '../stylesheets/Inventory.scss';
import { useForm } from 'react-hook-form';
import 'regenerator-runtime/runtime';

const InventoryDisplay = (props) => {
  
  // state for inventory
  const [ inv, setInv ] = useState([]);


  console.log(props.user.id);
  const [ userId, setUserId ] = useState([props.user.id])
  // function to add item
  const addedItem = (e) => {
    e.preventDefault();
    const body = {
      items: {
        account_id: e.target[0].value,
        name: e.target[1].value,
        quantity: e.target[2].value,
        info: e.target[3].value,
        category: e.target[4].value,
        location: e.target[5].value,
      }
    }
    const url = '/items/';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
      .then(() => inventoryGet());
  }

  // function to get the user ID
  // function to delete item
  const deletedItem = (e) => {
    e.preventDefault();
    console.log('hit')
    const url = '/items/'.concat(e.target[0].value);
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(() => inventoryGet());
  }

  // function that runs to update item
  const updatedItem = (e) => {
    e.preventDefault();
    
    // grab all relevant info from the synthetic event when updat button is pressed
    const body = {
      items: {
        id: e.target[0].value,
        name: e.target[1].value,
        quantity: e.target[2].value,
        info: e.target[3].value,
        category: e.target[4].value,
        location: e.target[5].value,
      }
    }
    // Patch request to update an item 
    const url = '/items/';
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
      .then(() => inventoryGet());
  }

  // function to get current users inventory
  const inventoryGet = () => {
    let invData;
    const url = '/items/'.concat(props.user.id);

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((data) => data.json())
      .then((data) => invData = data.items)
      .then((data) => {
        const invClass = [];
        // make an inventory component for each item received in the get request
        invData.sort((a, b) => b.id - a.id)
        invData.forEach((el, index) => {
        invClass.push(<Inventory id={index} invInfo = {data[index]} deletedItem = {deletedItem} updatedItem = {updatedItem}/>)
        })
        setInv(invClass);
      });
  }
  // get inventory on first render
  useEffect(() => {
    inventoryGet();
  }, []);


  return (
    <div className='all-inventory'>
      <div className = 'inventory-labels'>
        <h4 className = 'id-column'>ID</h4>
        <h4 className = 'other-column'>NAME</h4>
        <h4 className = 'quantity-column'>QUANTITY</h4>
        <h4 className = 'other-column'>CATEGORY</h4>
        <h4 className = 'other-column'>LOCATION</h4>
      </div>
      
      {/* whole div needs to be added per item in inventory array */}
      <div className = 'scroll'>
        {inv}
      </div>
      <div>
        <Popup trigger={<button type="button" className ='update-delete-buttons'>Add Item</button>} position="right center">
          <form onSubmit={(e) => addedItem(e)} >
            <div className="input-container">
              <input type="hidden" name="user-id" value = {userId} />
            </div>
            <div className="input-container">
              <input type="text" name="item-name" placeholder="Name" required />
            </div>
            <div className="input-container">
              <input type="number" name="item-quantity" placeholder="Quantity" required />
            </div>
            <div className="input-container">
              <input type="text" name="item-info" placeholder="Info" value="N/A" />
            </div>
            <div className="input-container">
              <input type="text" name="item-category" placeholder="Category" required />
            </div>
            <div className="input-container">
              <input type="text" name="item-location" placeholder="Location" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </Popup>
      </div>
    </div>

  );
};

export default InventoryDisplay;
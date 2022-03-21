import React, { useEffect, useState } from 'react';
import Inventory from './Inventory.jsx';
import Popup from 'reactjs-popup';
//import AddItem from './AddItem.jsx';
import '../stylesheets/Inventory.scss';
import { useForm } from 'react-hook-form';
import 'regenerator-runtime/runtime';

const InventoryDisplay = (props) => {
  
  const [ inv, setInv ] = useState([]);

  const updatedItem = (e) => {
    e.preventDefault();
 
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
    const url = 'http://localhost:3000/items/';
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
      .then(() => inventoryGet());
  }

  const inventoryGet = () => {
    let invData;
    fetch('http://localhost:3000/items/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((data) => data.json())
      .then((data) => invData = data.items)
      .then((data) => {
        const invClass = [];
        invData.forEach((el, index) => {
        invClass.push(<Inventory id={index} invInfo = {data[index]} updatedItem = {updatedItem}/>)
        })
        setInv(invClass);
      });
  }

  useEffect(() => {
    inventoryGet();
  }, []);

  // inventoryPost();

  // const array = [
  // ]

  // something.forEach(array.push(<Inventory /><button>Update</button><button>Delete</button>))
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
    </div>

  );
};

export default InventoryDisplay;
import React from 'react';
import Popup from 'reactjs-popup'

// change state and have if statement for what is displayed
const Inventory = (props) => {
  return (
    <form className = 'inventory-container'>
      <h4 className = 'id-column'>ID</h4>
      <h4 className = 'other-column'>Name</h4>
      <h4 className = 'quantity-column'>Quantity</h4>
      <h4 className = 'other-column'>Category</h4>
      <h4 className = 'other-column'>Location</h4>
      <Popup trigger={<button type="button" className ='update-delete-buttons'>Update</button>}>
        <form >
          <div className="input-container">
            <input type="text" name="item-name" placeholder="Name" required />
          </div>
          <div className="input-container">
            <input type="number" name="item-quantity" placeholder="Quantity" required />
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
      <button type="button" className ='update-delete-buttons'>Delete</button>
    </form>
  );
};

export default Inventory;

{/* <h4 className = 'id-column'>{props.inv[props.id].id}</h4>
      <h4 className = 'other-column'>{props.inv[props.id].name}</h4>
      <h4 className = 'quantity-column'>{props.inv[props.id].quantity}</h4>
      <h4 className = 'other-column'>{props.inv[props.id].category}</h4>
      <h4 className = 'other-column'>{props.inv[props.id].location}</h4> */}
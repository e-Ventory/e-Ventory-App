import React from 'react';
import Popup from 'reactjs-popup'

// change state and have if statement for what is displayed
const Inventory = (props) => {
  return (
    <form className = 'inventory-container'>
      <h4 className = 'id-column'>ID</h4>
      <h4 className = 'other-column'>NAME</h4>
      <h4 className = 'quantity-column'>QUANTITY</h4>
      <h4 className = 'other-column'>CATEGORY</h4>
      <h4 className = 'other-column'>LOCATION</h4>
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
            <input type="text" name="item-location" placeholder="location" required />
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

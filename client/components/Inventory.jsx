import React from 'react';

const Inventory = () => {
  return (
    <div className = 'inventory-container'>
      <input type="checkbox" />
      <h4 className = 'id-column'>ID</h4>
      <h4 className = 'other-column'>NAME</h4>
      <h4 className = 'quantity-column'>QUANTITY</h4>
      <h4 className = 'other-column'>CATEGORY</h4>
      <h4 className = 'other-column'>LOCATION</h4>
      <button type="button" className ='update-delete-buttons'>Update</button>
      <button type="button" className ='update-delete-buttons'>Delete</button>
    </div>
  );
};

export default Inventory;

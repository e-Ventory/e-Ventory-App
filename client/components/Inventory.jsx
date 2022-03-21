import React from 'react';
import Popup from 'reactjs-popup'

// change state and have if statement for what is displayed
const Inventory = (props) => {
  return (
    <form className = 'inventory-container' >
      <h4 className = 'id-column'>{props.invInfo.id}</h4>
      <h4 className = 'other-column'>{props.invInfo.name.toUpperCase()}</h4>
      <h4 className = 'quantity-column'>{props.invInfo.quantity}</h4>
      <h4 className = 'other-column'>{props.invInfo.category.toUpperCase()}</h4>
      <h4 className = 'other-column'>{props.invInfo.location.toUpperCase()}</h4>
      <Popup trigger={<button type="button" className ='update-delete-buttons'>Update</button>}>
        <form onSubmit={(e) => props.updatedItem(e)} >
          <input type="hidden" name="item-id" value={props.invInfo.id} />
          <div className="input-container">
            <input type="text" name="item-name" placeholder="Name" required />
          </div>
          <div className="input-container">
            <input type="number" name="item-quantity" placeholder="Quantity" required />
          </div>
          <div className="input-container">
            <input type="text" name="item-info" placeholder="Info"/>
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
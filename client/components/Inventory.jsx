import React from 'react';
import Popup from 'reactjs-popup'

// change state and have if statement for what is displayed
const Inventory = (props) => {
  return (
    // displays all values shown in columns for each inventory item
    <div className = 'inventory-container' >
      <h4 className = 'id-column'>{props.invInfo.id}</h4>
      <h4 className = 'other-column'>{props.invInfo.name.toUpperCase()}</h4>
      <h4 className = 'quantity-column'>{props.invInfo.quantity}</h4>
      <h4 className = 'other-column'>{props.invInfo.category.toUpperCase()}</h4>
      <h4 className = 'other-column'>{props.invInfo.location.toUpperCase()}</h4>
      {/* popup for add items, no info is required. only add info you want changed */}
      <Popup trigger={<button type="button" className ='update-delete-buttons'>Update</button>}>
        <form onSubmit={(e) => props.updatedItem(e)} >
          <input type="hidden" name="item-id" value={props.invInfo.id} />
          <div className="input-container">
            <input type="text" name="item-name" placeholder="Name" value = {undefined}/>
          </div>
          <div className="input-container">
            <input type="number" name="item-quantity" placeholder="Quantity" value = {undefined}  />
          </div>
          <div className="input-container">
            <input type="text" name="item-info" placeholder="Info" value = {undefined}/>
          </div>
          <div className="input-container">
            <input type="text" name="item-category" placeholder="Category" value = {undefined}  />
          </div>
          <div className="input-container">
            <input type="text" name="item-location" placeholder="Location" value = {undefined} />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </Popup>
      {/* delete button */}
      <form onSubmit={(e) => props.deletedItem(e)}>
        <input type="hidden" name ="item-id" value={props.invInfo.id} />
        <input type="submit" className ='update-delete-buttons' value="Delete"></input>
      </form>
    </div>
  );
};

export default Inventory;

{/* <h4 className = 'id-column'>{props.inv[props.id].id}</h4>
      <h4 className = 'other-column'>{props.inv[props.id].name}</h4>
      <h4 className = 'quantity-column'>{props.inv[props.id].quantity}</h4>
      <h4 className = 'other-column'>{props.inv[props.id].category}</h4>
      <h4 className = 'other-column'>{props.inv[props.id].location}</h4> */}
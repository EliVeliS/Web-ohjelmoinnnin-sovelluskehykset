import React from 'react';

export default function Buttons(props) {
  return <div>
          <button className="itemButtons" onClick={ ()=> props.clickMe(1) } >Add Milk</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(2) }>Add Bananas</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(3) }>Add Bread</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(4) }>Add Eggs</button>
  </div>;
}

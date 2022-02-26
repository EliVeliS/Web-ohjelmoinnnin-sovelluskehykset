import React from 'react';

export default function Favouritebuttons(props) {
  return <div>
  <button className="itemButtons" onClick={ ()=> props.favouriteMe(1, "DAIM",1) } >Add DAIM</button>
  <button className="itemButtons" onClick={ ()=> props.favouriteMe(2, "TWIX", 1) }>Add TWIX</button>
  <button className="itemButtons" onClick={ ()=> props.favouriteMe(3, "GEISHA", 1) }>Add GEISHA</button>
  <button className="itemButtons" onClick={ ()=> props.favouriteMe(4, "MARS", 1) }>Add MARS</button>
</div>;
}

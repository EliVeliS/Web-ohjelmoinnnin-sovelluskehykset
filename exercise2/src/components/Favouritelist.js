import React from 'react';

export default function Favouritelist(props) {
  return <div>
  <ul>      
      {
          props.favouriteItems.map((item, index) => {       
            return <li className="containerItems" key={index}> { item.qty } { item.value } bars  </li>                         
          })
      }
  </ul> 
</div>;
}


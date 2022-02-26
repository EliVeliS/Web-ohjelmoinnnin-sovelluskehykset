import React from 'react';

export default function Searchbar(props) {
  return (  
  <div className="searchBarContainer">
     <div className="storeLogo"></div>
     <div className="searchBarItems">Hae Tuotteita <input type="text"/>
     <button className="searchButton" onClick={ ()=> props.clickMe()}>Etsi</button>
     </div>
     <button className="searchButton" onClick={ ()=>props.clickMe()}>Hinta nouseva</button>
      <button className="searchButton" onClick={ ()=>props.clickMe()}>Hinta laskeva</button>
    </div>
  );
}
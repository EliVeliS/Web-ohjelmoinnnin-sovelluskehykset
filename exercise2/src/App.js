import Shoppinglist from './components/Shoppinglist'
import Favouritelist from './components/Favouritelist'
import Favouritebuttons from './components/Favouritebuttons'
import Favouritetitle from './components/Favouritetitle'
import Title from './components/Title'
import Buttons from './components/Buttons'
import React from "react";
import { useState } from "react";
import './App.css';

function App() {

    const [ shoppingListItems, setShoppingListItems  ] = useState([
        { id: 1, value: 'Milk', qty: 0},
        { id: 2, value: 'Bananas', qty: 0},
        { id: 3, value: 'Bread', qty: 0},
        { id: 4, value: 'Eggs', qty: 0}  
         
    ]);


    const addlistitems = (id) => {

      let random = Math.floor(Math.random() *30)
      let newShoppingListItems = [...shoppingListItems]
      let result = newShoppingListItems.findIndex(i => i.id === id)

        if (result !== -1) {
          let additions = {...newShoppingListItems[result]}
          additions.qty= additions.qty + random;
          newShoppingListItems[result] = additions;
          setShoppingListItems(newShoppingListItems)

        }
    }

    const [ favouriteList, setfavouriteList  ] = useState([]);

    let random = Math.floor(Math.random() *30)


    const addDummies = (id, value, qty) => {

      let newFavouriteList = [...favouriteList]
      let result = newFavouriteList.findIndex(i => i.id === id)
      console.log(result)


      if(result == -1) {

        let newFavouritelist = [...favouriteList, {

          id : id,
          value : value,
          qty : qty

        }];
        setfavouriteList(newFavouritelist);
      } else {
        let additions = {...newFavouriteList[result]}
          additions.qty= additions.qty + random;
          newFavouriteList[result] = additions;
          setfavouriteList(newFavouriteList);
      }

      }

    
    
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="container">
          <Title/>
            <Shoppinglist listItems={shoppingListItems}/>
          <Buttons clickMe={addlistitems}/>
        </div>
          <div className="container">
            <Favouritetitle/>
              <Favouritelist favouriteItems={favouriteList}/>
            <Favouritebuttons favouriteMe={addDummies}/>
        </div>
      </div>
    </div>
  );
}

export default App;
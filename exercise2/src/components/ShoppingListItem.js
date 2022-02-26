import React from "react";
import styles from './ShoppingListItem.module.css';
import { useState } from "react";

/* Shopping list item */
const ShoppingListItem = props => {
  return <li className={ useState(styles.flex, styles.item) }>
    <div className={ useState(styles.flex, styles.itemQtyUnit) }>
      <div>
        { props.qty }
      </div>
      <div>
        { props.unit }
      </div>
    </div>
    <div>
      { props.value}
    </div>
  </li>
}

export default ShoppingListItem;
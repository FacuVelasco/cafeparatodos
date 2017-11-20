import React from 'react';
import Item from '../components/Item.jsx';
import s from './List.ncss';

export default function List (props) {
  if (!props.items) {
    return (<p>No items found :(</p>);
  }
  else {
    return (
      <div>
        {props.items.map((elem, i) => (
          <Item
            {...elem}
            i={i}
            key={elem._id}
            deleteElem={props.deleteShopListItem}
          />
        ))}
      </div>
      /*NEW ITEM MODAL?*/
    )
  }
}
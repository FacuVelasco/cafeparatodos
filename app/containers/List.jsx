import React from 'react';
import Loading from '../components/Loading.jsx';
import Item from '../components/Item.jsx';

export default class List extends React.Component {

  render() {
    if (this.props.loading) return <Loading />
    else {
      return (
        <div>
          {this.props.items.map((elem, i) => {
            <Item
              {...elem}
              i={i}
              key={elem._id}
              deleteElem={this.props.deleteShopListItem}
            />
          })}
        </div>
        /*NEW ITEM MODAL?*/
      )
    }
  }
}
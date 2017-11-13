import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { deleteShopListFav, deleteShopListItem } from '../redux/actionCreator/';
import List from './List.jsx';

function mapStateToProps(state){
  return {
    categorys: state.shopList.categorys,
    favorites: state.shopList.favorites,
    items: state.shopList.items,
    loading: state.loading,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteShopListFav, deleteShopListItem }, dispatch)
}

class ShopList extends React.Component{
  render() {
    return (
      <div>
        <div className="listContainer">
          <List
            items={this.props.items}
            categorys={this.props.categorys}
            deleteElem={this.props.deleteShopListItem}
            loading={this.props.loading}
          />
        </div>
        <div className="sideList">          
          <List
            items={this.props.favorites}
            deleteElem={this.props.deleteShopListFav}
            loading={this.props.loading}
          />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
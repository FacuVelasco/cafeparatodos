import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { deleteShopListFav, deleteShopListItem, searchAll } from '../redux/actionCreator/';
import List from './List.jsx';
import Loading from '../components/Loading.jsx';
import s from './ShopList.ncss';

function mapStateToProps(state){
  return {
    categorys: state.shopList.categorys,
    favorites: state.shopList.favorites,
    items: state.shopList.items,
    loading: state.loading,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteShopListFav, deleteShopListItem, searchAll }, dispatch);
}

class ShopList extends React.Component{
  componentDidMount() {
    this.props.searchAll('market');
  }
  render() {
    if (this.props.loading) return <Loading />
    else {
      return (
        <div className={s.listContainer}>
          <List
            items={this.props.items}
            categorys={this.props.categorys}
            deleteElem={this.props.deleteShopListItem}
            loading={this.props.loading}
          />          
          <List
            items={this.props.favorites}
            deleteElem={this.props.deleteShopListFav}
            loading={this.props.loading}
          />
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
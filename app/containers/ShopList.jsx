import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';

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
  constructor(props) {
    super(props);
    this.state = {
      tab: 'current',
    }
  }
  componentDidMount() {
    this.props.searchAll('market');
  }
  render() {
    if (this.props.loading) return <Loading />
    else {
      return (
        <Tabs
          value={this.state.tab}
          onChange={this.handleChange}
        >
          <Tab label="Current List" value="current">
            <List
              items={this.props.items}
              categorys={this.props.categorys}
              deleteElem={this.props.deleteShopListItem}
              loading={this.props.loading}
            />
          </Tab>          
          <Tab label="Favorites" value="favorites">
            <List
              items={this.props.favorites}
              deleteElem={this.props.deleteShopListFav}
              loading={this.props.loading}
            />
          </Tab>
        </Tabs>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
export default function shopList(state={}, action) {
  let i;
  switch(action.type) {
    case 'GET_ITEM_LIST':
      return Object.assign({}, state, {items: action.list});
    case 'ADD_ITEM_TO_LIST':
      return Object.assign({}, state, { items: [
        ...state.items, action.item
      ]})
    case 'ADD_ITEM_TO_FAVORITE':
      return Object.assign({}, state, { items: [
        ...state.favorites, action.item
      ]})
    case 'DELETE_SHOP_LIST_ITEM':
      i = action.index;
      return Object.assign({}, state, { items: [
        ...state.items.slice(0,i),
        ...state.items.slice(i+1),
      ]});
    case 'DELETE_SHOP_LIST_FAVOURITE':
      i = action.index;
      return Object.assign({}, state, { favorites: [
        ...state.favorites.slice(0,i),
        ...state.favorites.slice(i+1),
      ]});
    default:
      return state;
  }
}
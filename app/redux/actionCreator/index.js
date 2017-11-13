export function deleteShopListItem(index) {
  return {
    type: 'DELETE_SHOP_LIST_ITEM',
    index,
  }
}

export function deleteShopListFav(index) {
  return {
    type: 'DELETE_SHOP_LIST_FAVOURITE',
    index,
  }
}

export function addListItem(item) {
  return {
    type: 'ADD_ITEM_TO_LIST',
    item,
  }
}

export function addFavoriteItem(item) {
  return {
    type: 'ADD_ITEM_TO_FAVORITE',
    item,
  }
}

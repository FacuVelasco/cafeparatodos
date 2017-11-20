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

export function getListItems(list) {
  return {
    type: 'GET_ITEM_LIST',
    list,
  }
}

export function getFavoritesItems(list) {
  return {
    type: 'GET_FAVORITE_LIST',
    list,
  }
}

export function loading() {
  return {
    type: 'LOADING',
  }
}

export function finishLoading() {
  return {
    type: 'FINISH_LOADING',
  }
}

export function showErr() {
  return {
    type: 'ERROR',
  }
}

export function searchAll(model){
  return (dispatch) => {
    dispatch(loading())
    return fetch(`http://localhost/${model}`, {
      method: 'GET',
      includes: 'credentials',
    })
    .then(res => res.json())
    .then(resp => {
      const list = resp.content
      dispatch(getListItems(list.filter(item => item.type === 'current')));
      dispatch(getFavoritesItems(list.filter(item => item.type === 'favorite')));
      dispatch(finishLoading());
    }).catch(err => {
      console.log('ERR', err)
      dispatch(showErr(err))
      dispatch(finishLoading());
    })
  }
}
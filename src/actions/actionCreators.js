import {
  SEARCH_CITIES_REQUEST,
  SEARCH_CITIES_FAILURE,
  SEARCH_CITIES_SUCCESS,
  CHANGE_SEARCH_FIELD,


  GET_ITEMS_REQUEST,
  GET_ITEMS_FAILURE,
  GET_ITEMS_SUCCESS,
  GET_ITEMSCAT_REQUEST,
  GET_ITEMSCAT_FAILURE,
  GET_ITEMSCAT_SUCCESS,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
  GET_HIT_REQUEST,
  GET_HIT_FAILURE,
  GET_HIT_SUCCESS,
  GET_ADDITEMS_REQUEST,
  GET_ADDITEMS_FAILURE,
  GET_ADDITEMS_SUCCESS,
  GET_ORDERINFO_REQUEST,
  GET_ORDERINFO_FAILURE,
  GET_ORDERINFO_SUCCESS,
  POST_CART_REQUEST,
  POST_CART_FAILURE,
  POST_CART_SUCCESS,
  GET_CARTDATA_REQUEST,
  GET_CARTDATA_FAILURE,
  GET_CARTDATA_SUCCESS,
} from './actionTypes';


export const searchCitiesRequest = search => ({
  type: SEARCH_CITIES_REQUEST,
  payload: { search },
});

export const searchCitiesFailure = errorSearch => ({
  type: SEARCH_CITIES_FAILURE,
  payload: { errorSearch },
});

export const searchCitiesSuccess = cities => ({
  type: SEARCH_CITIES_SUCCESS,
  payload: { cities },
});

export const changeSearchField = searchChange => ({
  type: CHANGE_SEARCH_FIELD,
  payload: { searchChange },
});





export const getCartDataRequest = setData => ({
  type: GET_CARTDATA_REQUEST,
  payload: { setData },
});

export const getCartDataFailure = errorCartData => ({
  type: GET_CARTDATA_FAILURE,
  payload: { errorCartData },
});

export const getCartDataSuccess = cartData => ({
  type: GET_CARTDATA_SUCCESS,
  payload: { cartData },
});

export const postCartRequest = data => ({
  type: POST_CART_REQUEST,
  payload: { data },
});

export const postCartFailure = errorCart => ({
  type: POST_CART_FAILURE,
  payload: { errorCart },
});

export const postCartSuccess = cart => ({
  type: POST_CART_SUCCESS,
  payload: { cart },
});

export const getOrderInfoRequest = (idInfo) => ({
  type: GET_ORDERINFO_REQUEST,
  payload: { idInfo },
});

export const getOrderInfoFailure = errorInfo => ({
  type: GET_ORDERINFO_FAILURE,
  payload: { errorInfo },
});

export const getOrderInfoSuccess = orderInfo => ({
  type: GET_ORDERINFO_SUCCESS,
  payload: { orderInfo },
});



export const getAddItemsRequest = (coin, cat) => ({
  type: GET_ADDITEMS_REQUEST,
  payload: { coin, cat },
});

export const getAddItemsFailure = errorAddItems => ({
  type: GET_ADDITEMS_FAILURE,
  payload: { errorAddItems },
});

export const getAddItemsSuccess = additems => ({
  type: GET_ADDITEMS_SUCCESS,
  payload: { additems },
});

export const getItemsCatRequest = (id) => ({
  type: GET_ITEMSCAT_REQUEST,
  payload: { id },
});

export const getItemsCatFailure = errorItemsCat => ({
  type: GET_ITEMSCAT_FAILURE,
  payload: { errorItemsCat },
});

export const getItemsCatSuccess = itemsCat => ({
  type: GET_ITEMSCAT_SUCCESS,
  payload: { itemsCat },
});
export const getItemsRequest = () => ({
  type: GET_ITEMS_REQUEST,
});

export const getItemsFailure = error => ({
  type: GET_ITEMS_FAILURE,
  payload: { error },
});

export const getItemsSuccess = items => ({
  type: GET_ITEMS_SUCCESS,
  payload: { items },
});
export const getCategoriesRequest = () => ({
  type: GET_CATEGORIES_REQUEST,
});

export const getCategoriesFailure = errorCat => ({
  type: GET_CATEGORIES_FAILURE,
  payload: { errorCat },
});

export const getCategoriesSuccess = categories => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: { categories },
});

export const getHitRequest = () => ({
  type: GET_HIT_REQUEST,
});

export const getHitFailure = errorHit => ({
  type: GET_HIT_FAILURE,
  payload: { errorHit },
});

export const getHitSuccess = hits => ({
  type: GET_HIT_SUCCESS,
  payload: { hits },
});
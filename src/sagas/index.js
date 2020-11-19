import { takeEvery, takeLatest, put, spawn, debounce, retry } from 'redux-saga/effects';
import { getCartDataSuccess, getCartDataFailure, postCartSuccess, postCartFailure, getOrderInfoSuccess, getOrderInfoFailure, searchCitiesSuccess, searchCitiesFailure, searchCitiesRequest, getAddItemsSuccess, getAddItemsFailure, getItemsSuccess, getItemsFailure, getHitSuccess, getHitFailure, getCategoriesSuccess, getCategoriesFailure, getItemsCatSuccess, getItemsCatFailure } from '../actions/actionCreators';
import { GET_CARTDATA_REQUEST, POST_CART_REQUEST, GET_ORDERINFO_REQUEST, SEARCH_CITIES_REQUEST, CHANGE_SEARCH_FIELD, GET_HIT_REQUEST, GET_ITEMS_REQUEST, GET_CATEGORIES_REQUEST, GET_ITEMSCAT_REQUEST, GET_ADDITEMS_REQUEST } from '../actions/actionTypes';
import { postCart, listItems, listHits, listCategories, itemsInCategory, addItems, searchCities, orderInfo, getCartData } from '../api/index';



function filterChangeSearchAction({ type, payload }) {
    return type === CHANGE_SEARCH_FIELD && payload.searchChange.trim() !== ''
}

// worker
function* handleChangeSearchSaga(action) {
    yield put(searchCitiesRequest(action.payload.searchChange));
}

// watcher
function* watchChangeSearchSaga() {
    yield debounce(100, filterChangeSearchAction, handleChangeSearchSaga);
}

// worker
function* handleSearchCitiesSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, searchCities, action.payload.search);
        yield put(searchCitiesSuccess(data));
    } catch (e) {
        yield put(searchCitiesFailure(e.message));
    }
}

// watcher
function* watchSearchItemsSaga() {
    yield takeLatest(SEARCH_CITIES_REQUEST, handleSearchCitiesSaga);
}








function filterCartDataAction({ type, payload }) {
    return type === GET_CARTDATA_REQUEST && payload.setData !== ''
}

// worker
function* handleCartDataSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        console.log(action.payload)
        const data = yield retry(retryCount, retryDelay, getCartData, action.payload.setData);
        yield put(getCartDataSuccess(data));
    } catch (e) {
        yield put(getCartDataFailure(e.message));
    }
}

// watcher
function* watchCartDataSaga() {
    yield debounce(100, filterCartDataAction, handleCartDataSaga);
}



function filterGetAddItemsAction({ type, payload }) {
    return type === GET_ADDITEMS_REQUEST && payload.coin !== ''
}

// watcher
function* watchGetAddItemsSaga() {
    yield debounce(100, filterGetAddItemsAction, handleGetAddItemsSaga);
}

// worker
function* handleGetAddItemsSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, addItems, action.payload.coin, action.payload.cat);
        yield put(getAddItemsSuccess(data));
    } catch (e) {
        yield put(getAddItemsFailure(e.message));
    }
}

function filterGetItemsCatAction({ type, payload }) {
    return type === GET_ITEMSCAT_REQUEST && payload.id !== ''
}

// watcher
function* watchGetItemsCatSaga() {
    yield debounce(100, filterGetItemsCatAction, handleGetItemsCatSaga);
}

// worker
function* handleGetItemsCatSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, itemsInCategory, action.payload.id);
        yield put(getItemsCatSuccess(data));
    } catch (e) {
        yield put(getItemsCatFailure(e.message));
    }
}

function* handleGetHitsSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, listHits);
        yield put(getHitSuccess(data));
    } catch (e) {
        yield put(getHitFailure(e.message));
    }
}

// watcher
function* watchGetHitsSaga() {
    yield takeEvery(GET_HIT_REQUEST, handleGetHitsSaga);
}

function* handleGetCategoriesSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, listCategories);
        yield put(getCategoriesSuccess(data));
    } catch (e) {
        yield put(getCategoriesFailure(e.message));
    }
}
// watcher
function* watchGetCategoriesSaga() {
    yield takeEvery(GET_CATEGORIES_REQUEST, handleGetCategoriesSaga);
}

function* handleGetItemsSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, listItems);
        yield put(getItemsSuccess(data));
    } catch (e) {
        yield put(getItemsFailure(e.message));
    }
}

// watcher
function* watchGetItemsSaga() {
    yield takeEvery(GET_ITEMS_REQUEST, handleGetItemsSaga);
}

function filterOrderInfoAction({ type, payload }) {
    return type === GET_ORDERINFO_REQUEST && payload.idInfo !== ''
}

// watcher
function* watchOrderInfoSaga() {
    yield debounce(100, filterOrderInfoAction, handleOrderInfoSaga);
}

// worker
function* handleOrderInfoSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, orderInfo, action.payload.idInfo);
        yield put(getOrderInfoSuccess(data));
    } catch (e) {
        yield put(getOrderInfoFailure(e.message));
    }
}

function filterPostCartAction({ type, payload }) {
    return type === POST_CART_REQUEST && payload.data !== ''
}

// watcher
function* watchPostCartSaga() {
    yield debounce(100, filterPostCartAction, handlePostCartSaga);
}

// worker
function* handlePostCartSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, postCart, action.payload.data);
        yield put(postCartSuccess(data));
    } catch (e) {
        yield put(postCartFailure(e.message));
    }
}

export default function* saga() {
    yield spawn(watchCartDataSaga);
    yield spawn(watchPostCartSaga);
    yield spawn(watchGetItemsSaga);
    yield spawn(watchGetHitsSaga);
    yield spawn(watchGetCategoriesSaga);
    yield spawn(watchGetItemsCatSaga);
    yield spawn(watchGetAddItemsSaga);
    yield spawn(watchChangeSearchSaga);
    yield spawn(watchSearchItemsSaga);
    yield spawn(watchOrderInfoSaga);
}
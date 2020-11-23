import { takeEvery, takeLatest, put, spawn, debounce, retry } from 'redux-saga/effects';
import { getCityIdSuccess, getCityIdFailure, getTicketsDataSuccess, getTicketsDataFailure, searchCitiesSuccess, searchCitiesFailure, searchCitiesRequest} from '../actions/actionCreators';
import { GET_CITYID_REQUEST, GET_TICKETSDATA_REQUEST, SEARCH_CITIES_REQUEST, CHANGE_SEARCH_FIELD } from '../actions/actionTypes';
import { cityId, ticketsData, searchCities} from '../api/index';



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


function filterTicketsDataAction({ type, payload }) {
    return type === GET_TICKETSDATA_REQUEST && payload.ticketsdata !== ''
}

// watcher
function* watchTicketsDataSaga() {
    yield debounce(100, filterTicketsDataAction, handleTicketsDataSaga);
}

// worker
function* handleTicketsDataSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, ticketsData, action.payload.ticketsdata);
        console.log(data)
        yield put(getTicketsDataSuccess(data));
    } catch (e) {
        yield put(getTicketsDataFailure(e.message));
    }
}


function filterCityIdAction({ type, payload }) {
    return type === GET_CITYID_REQUEST && payload.name !== ''
}

// watcher
function* watchCityIdSaga() {
    yield debounce(100, filterCityIdAction, handleCityIdSaga);
}

// worker
function* handleCityIdSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, cityId, action.payload.name);
        yield put(getCityIdSuccess(data));
    } catch (e) {
        yield put(getCityIdFailure(e.message));
    }
}


export default function* saga() {
    yield spawn(watchTicketsDataSaga);
    yield spawn(watchCityIdSaga);
    yield spawn(watchChangeSearchSaga);
    yield spawn(watchSearchItemsSaga);
}
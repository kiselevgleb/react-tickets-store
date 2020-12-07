import { takeEvery, takeLatest, put, spawn, debounce, retry } from 'redux-saga/effects';
import { getLastTicSuccess, getLastTicFailure, getCityIdSuccess, getCityIdFailure, getTicketsDataSuccess, getTicketsDataFailure, searchCitiesSuccess, searchCitiesFailure, searchCitiesRequest, getTicketsDataRequest} from '../actions/actionCreators';
import { GET_LAST_TIC_REQUEST, GET_CITYID_REQUEST, GET_TICKETSDATA_REQUEST, SEARCH_CITIES_REQUEST, CHANGE_SEARCH_FIELD } from '../actions/actionTypes';
import { lastTic, cityId, ticketsData, searchCities} from '../api/index';
// import { useSelector, useDispatch } from 'react-redux';


// function* handleChangeInputCheckboxSaga(action) {

    // const { from_city_id, to_city_id, date_start, date_end, date_start_arrival, date_end_arrival, have_first_class, have_second_class, have_third_class, have_fourth_class, have_wifi, have_air_conditioning, have_express, price_from, price_to  } = useSelector(state => state.skills);
// console.log(1);
    // yield put(getTicketsDataRequest({ "from_city_id": action.payload.from_city_id, "to_city_id": action.payload.to_city_id, "date_start": action.payload.date_start, "date_end":  action.payload.date_end, "date_start_arrival": action.payload.date_start_arrival, "date_end_arrival": action.payload.date_end_arrival, "have_first_clas": action.payload.have_first_class,"have_second_class": action.payload.have_second_class, "have_third_class": action.payload.have_third_class, "have_fourth_class": action.payload.have_fourth_class, "have_wifi": action.payload.have_wifi, "have_air_conditioning": action.payload.have_air_conditioning,"have_express": action.payload.have_express,"price_from": action.payload.price_from,"price_to": action.payload.price_to}));
// }

// watcher
// function* watchChangeInputCheckboxSaga() {
    // yield takeLatest(CHANGE_INPUT_CHECKBOX, handleChangeInputCheckboxSaga);
// }

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
        console.log(data.items)
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

function filterLastTicAction({ type }) {
    return type === GET_LAST_TIC_REQUEST
}

// watcher
function* watchLastTicSaga() {
    yield debounce(100, filterLastTicAction, handleLastTicSaga);
}

// worker
function* handleLastTicSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, lastTic );
        yield put(getLastTicSuccess(data));
    } catch (e) {
        yield put(getLastTicFailure(e.message));
    }
}

export default function* saga() {
    yield spawn(watchTicketsDataSaga);
    yield spawn(watchCityIdSaga);
    yield spawn(watchChangeSearchSaga);
    yield spawn(watchSearchItemsSaga);
    yield spawn(watchLastTicSaga);
}
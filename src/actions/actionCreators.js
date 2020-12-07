import {
  SEARCH_CITIES_REQUEST,
  SEARCH_CITIES_FAILURE,
  SEARCH_CITIES_SUCCESS,
  CHANGE_SEARCH_FIELD,
  GET_TICKETSDATA_REQUEST,
  GET_TICKETSDATA_FAILURE,
  GET_TICKETSDATA_SUCCESS,
  GET_CITYID_REQUEST,
  GET_CITYID_FAILURE,
  GET_CITYID_SUCCESS,
  GET_LAST_TIC_REQUEST,
  GET_LAST_TIC_FAILURE,
  GET_LAST_TIC_SUCCESS,

  CHANGE_INPUT_CHECKBOX,
  CHANGE_INPUT_PRICE,
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

export const changeInputCheckbox = (nameInp, stateInp) => ({
  type: CHANGE_INPUT_CHECKBOX,
  payload: { nameInp, stateInp },
});
export const changeInputPrice = (min, max) => ({
  type: CHANGE_INPUT_PRICE,
  payload: { min, max },
});

export const getTicketsDataRequest = (ticketsdata) => ({
  type: GET_TICKETSDATA_REQUEST,
  payload: { ticketsdata },
});

export const getTicketsDataFailure = errorData => ({
  type: GET_TICKETSDATA_FAILURE,
  payload: { errorData },
});

export const getTicketsDataSuccess = datatick => ({
  type: GET_TICKETSDATA_SUCCESS,
  payload: { datatick },
});

export const getCityIdRequest = (name) => ({
  type: GET_CITYID_REQUEST,
  payload: { name },
});

export const getCityIdFailure = errorName => ({
  type: GET_CITYID_FAILURE,
  payload: { errorName },
});

export const getCityIdSuccess = cityId => ({
  type: GET_CITYID_SUCCESS,
  payload: { cityId },
});



export const getLastTicRequest = () => ({
  type: GET_LAST_TIC_REQUEST,
});

export const getLastTicFailure = errorLastTic => ({
  type: GET_LAST_TIC_FAILURE,
  payload: { errorLastTic },
});

export const getLastTicSuccess = lastTic => ({
  type: GET_LAST_TIC_SUCCESS,
  payload: { lastTic },
});

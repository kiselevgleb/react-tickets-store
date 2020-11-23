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
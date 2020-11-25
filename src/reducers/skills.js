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

} from '../actions/actionTypes'

const initialState = {
  search: '',
  cities: [],
  datatick: [],
  cityId: {},
};

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {


    case SEARCH_CITIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_CITIES_FAILURE:
      const { errorSearch } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorSearch,
      };
    case SEARCH_CITIES_SUCCESS:
      const { cities } = action.payload;
      return {
        ...state,
        cities,
        loading: false,
        error: null,
      };
    case CHANGE_SEARCH_FIELD:
      const { searchChange } = action.payload;
      const hasQuery = searchChange.trim() === '';
      if (hasQuery) {
        return {
          ...state,
          search: searchChange
        };
      }
      else {
        return {
          ...state,
          search: searchChange
        };
      };

    case GET_TICKETSDATA_REQUEST:
      const { ticketsdata } = action.payload;
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_TICKETSDATA_FAILURE:
      const { errorData } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorData,
      };
    case GET_TICKETSDATA_SUCCESS:
      const { datatick } = action.payload;
      return {
        ...state,
        datatick,
        loading: false,
        error: null,
      };


    case GET_CITYID_REQUEST:
      const { name } = action.payload;
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CITYID_FAILURE:
      const { errorName } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorName,
      };
    case GET_CITYID_SUCCESS:
      const { cityId } = action.payload;
      return {
        ...state,
        cityId,
        loading: false,
        error: null,
      };
      default:
        return state;
    }
}
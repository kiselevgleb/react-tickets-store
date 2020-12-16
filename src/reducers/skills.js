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
  CHANGE_SORT,
  CHANGE_DEPARTURE_START_HOURS,
  CHANGE_DEPARTURE_END_HOURS,
  CHANGE_ARRIVAL_START_HOURS,
  CHANGE_ARRIVAL_END_HOURS,
} from '../actions/actionTypes'

const initialState = {
  search: '',
  cities: [],
  datatick: [],
  lastTic: [],
  from_city_id: 0,
  // - Идентификатор города, откуда планируется путешествие (обязательный)
  to_city_id: 0,
  // - Идентификатор города, куда планируется путешествие (обязательный)
  date_start: '',
  // - Дата отбытия туда (в формате YYYY-DD-MM; например 2030-03-01)
  date_end: '',
  // - Дата отбытия обратно (в формате YYYY-DD-MM; например 2030-03-01)
  date_start_arrival: '',
  // - Дата прибытия туда (в формате YYYY-DD-MM; например 2030-03-01)
  date_end_arrival: '',
  // - Дата прибытия обратно (в формате YYYY-DD-MM; например 2030-03-01)
  have_first_class: '',
  // - Люкс (true/false)
  have_second_class: '',
  // - Купе (true/false)
  have_third_class: '',
  // - Плацкарт (true/false)
  have_fourth_class: '',
  // - Сидячее место (true/false)
  have_wifi: '',
  // - Имеется WiFi (true/false)
  have_air_conditioning: '',
  // - Имеется кондиционер (true/false)
  have_express: '',
  // - Экспресс (true/false)
  price_from: '',
  // - Цена от
  price_to: '',
  // - Цена до
  start_departure_hour_from: '',
  // - Час отбытия от (число)
  start_departure_hour_to: '',
  // - Час отбытия до (число)
  start_arrival_hour_from: '',
  // - Час прибытия от (число)
  start_arrival_hour_to: '',
  // - Час прибытия до (число)
  end_departure_hour_from: '',
  // - Час отбытия назад от (число)
  end_departure_hour_to: '',
  // - Час отбытия назад до (число)
  end_arrival_hour_from: '',
  // - Час прибытия назад от (работает при установленном параметре date_end)
  end_arrival_hour_to: '',
  // - Час прибытия назад до (работает при установленном параметре date_end)
  limit: '',
  // - Количество результатов на странице
  offset: '',
  // - Количество результатов, которое необходимо пропустить в выдаче
  sort: '',
  // - Сортировка результатов (date, price, duration)

};

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {

    case CHANGE_SORT:
      const { sortName } = action.payload;
      return {
        ...state,
        sort: sortName,
      };
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

    case CHANGE_DEPARTURE_START_HOURS:
      const { depStmin, depStmax } = action.payload;
      return {
        ...state,
        start_departure_hour_from: depStmin,
        start_departure_hour_to: depStmax,
      };
    case CHANGE_DEPARTURE_END_HOURS:
      const { depEnmin, depEnmax } = action.payload;
      return {
        ...state,
        end_departure_hour_from: depEnmin,
        end_departure_hour_to: depEnmax,
      };

    case CHANGE_ARRIVAL_START_HOURS:
      const { arrStmin, arrStmax } = action.payload;
      return {
        ...state,
        start_arrival_hour_from: arrStmin,
        start_arrival_hour_to: arrStmax,
      };
    case CHANGE_ARRIVAL_END_HOURS:
      const { arrEnmin, arrEnmax } = action.payload;
      return {
        ...state,
        end_arrival_hour_from: arrEnmin,
        end_arrival_hour_to: arrEnmax,
      };

    case CHANGE_INPUT_PRICE:
      const { min, max } = action.payload;
      return {
        ...state,
        price_from: min,
        price_to: max,
      };
    case CHANGE_INPUT_CHECKBOX:
      const { nameInp, stateInp } = action.payload;

      switch (nameInp) {
        case 'from_city_id':
          return {
            ...state,
            from_city_id: stateInp,
          };
        case 'to_city_id':
          return {
            ...state,
            to_city_id: stateInp,
          };
        case 'date_start':
          return {
            ...state,
            date_start: stateInp,
          };
        case 'date_end':
          return {
            ...state,
            date_end: stateInp,
          };
        case 'date_start_arrival':
          return {
            ...state,
            date_start_arrival: stateInp,
          };
        case 'date_end_arrival':
          return {
            ...state,
            date_end_arrival: stateInp,
          };
        case 'have_first_class':
          return {
            ...state,
            have_first_class: stateInp,
          };
        case 'have_second_class':
          return {
            ...state,
            have_second_class: stateInp,
          };
        case 'have_third_class':
          return {
            ...state,
            have_third_class: stateInp,
          };
        case 'have_fourth_class':
          return {
            ...state,
            have_fourth_class: stateInp,
          };
        case 'have_air_conditioning':
          return {
            ...state,
            have_air_conditioning: stateInp,
          };
        case 'have_wifi':
          return {
            ...state,
            have_wifi: stateInp,
          };
        case 'have_express':
          return {
            ...state,
            have_express: stateInp,
          };
        case 'price_from':
          return {
            ...state,
            price_from: stateInp,
          };
        case 'price_to':
          return {
            ...state,
            price_to: stateInp,
          };
      }

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



    case GET_LAST_TIC_REQUEST:
      console.log(222);
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_LAST_TIC_FAILURE:
      const { errorLastTic } = action.payload;
      console.log(errorLastTic);

      return {
        ...state,
        loading: false,
        error: errorLastTic,
      };
    case GET_LAST_TIC_SUCCESS:
      console.log(444);

      const { lastTic } = action.payload;
      console.log(lastTic);
      return {
        ...state,
        lastTic,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
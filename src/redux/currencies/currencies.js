import axios from 'axios';

const GET_CURRENCY_REQUEST = 'currency/get/REQUEST';
const GET_CURRENCY_SUCCESS = 'currency/get/SUCCESS';
const GET_CURRENCY_FAILURE = 'currency/get/FAILURE';
const FILTER_CURRENCY = 'currency/FILTER';
const HOMEPAGE_SUCCESS = 'currency/homepage/SUCCESS';
const STATPAGE_SUCCESS = 'currency/statpage/SUCCESS';

export const initialState = {
  loading: false,
  currency: [],
  error: '',
  home: true,
  value: 'all',
  filtered: [],
  data: [],
};

const filtering = (data, value) => {
  let result;

  switch (value) {
    case 'all':
      result = data;
      break;
    case '10000000000':
      result = data.filter((coin) => coin.marketCap >= 10000000000 && coin.marketCap < 20000000000);
      break;
    case '20000000000':
      result = data.filter((coin) => coin.marketCap >= 20000000000 && coin.marketCap < 30000000000);
      break;
    case '30000000000':
      result = data.filter((coin) => coin.marketCap >= 30000000000 && coin.marketCap < 40000000000);
      break;
    case '40000000000':
      result = data.filter((coin) => coin.marketCap >= 40000000000 && coin.marketCap < 50000000000);
      break;
    case '50000000000':
      result = data.filter((coin) => coin.marketCap >= 50000000000 && coin.marketCap < 60000000000);
      break;
    case '60000000000':
      result = data.filter((coin) => coin.marketCap >= 60000000000 && coin.marketCap < 70000000000);
      break;
    case '70000000000':
      result = data.filter((coin) => coin.marketCap >= 70000000000 && coin.marketCap < 80000000000);
      break;
    case '80000000000':
      result = data.filter((coin) => coin.marketCap >= 80000000000 && coin.marketCap < 90000000000);
      break;
    default:
      result = data.filter((coin) => coin.marketCap >= 9000000000000);
  }
  return result;
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY_REQUEST:
      return { ...state, loading: true };

    case GET_CURRENCY_SUCCESS:
      return {
        ...state,
        loading: true,
        currency: action.payload,
        error: '',
      };

    case FILTER_CURRENCY:
      return {
        ...state,
        value: action.payload.value,
        data: action.payload.data,
        filtered: filtering(action.payload.data, action.payload.value),
      };

    case GET_CURRENCY_FAILURE:
      return {
        loading: false,
        currency: [],
        error: action.payload,
      };

    case HOMEPAGE_SUCCESS:
      return { ...state, home: true };

    case STATPAGE_SUCCESS:
      return { ...state, home: action.payload };

    default:
      return state;
  }
};

export const getCurrencyRequest = () => ({
  type: GET_CURRENCY_REQUEST,
});

export const getCurrencySuccess = (currency) => ({
  type: GET_CURRENCY_SUCCESS,
  payload: currency,
});

export const getCurrencyFailure = (error) => ({
  type: GET_CURRENCY_FAILURE,
  payload: error,
});

export const filterCurrency = (payload) => ({
  type: FILTER_CURRENCY,
  payload,
});

export const statPageSuccess = (payload) => ({
  type: STATPAGE_SUCCESS,
  payload,
});

export const fetchCurrency = () => (dispatch) => {
  dispatch(getCurrencyRequest);
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
    .then((response) => {
      const newData = response.data;
      const currency = newData.map((coin) => ({
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        image: coin.image,
        price: coin.current_price,
        marketCap: coin.market_cap,
        rank: coin.market_cap_rank,
        totalVolume: coin.total_volume,
        high: coin.high_24h,
        low: coin.low_24h,
      }));
      dispatch(getCurrencySuccess(currency));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(getCurrencyFailure(errorMsg));
    });
};

export const fetchStats = () => (dispatch) => {
  dispatch(getCurrencyRequest);
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
    .then((response) => {
      const newData = response.data;
      const currency = newData.map((coin) => ({
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        image: coin.image,
        price: coin.current_price,
        marketCap: coin.market_cap,
        rank: coin.market_cap_rank,
        totalVolume: coin.total_volume,
        high: coin.high_24h,
        low: coin.low_24h,
      }));
      dispatch(getCurrencySuccess(currency));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(getCurrencyFailure(errorMsg));
    });
};

export default currencyReducer;

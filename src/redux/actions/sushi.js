import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchSushi = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios.get(`https://62e7b1a10e5d74566af9f1ec.mockapi.io/items`).then(({ data }) => {
    dispatch(setSushi(data));
  });
};

export const setSushi = (items) => ({
  type: 'SET_SUSHI',
  payload: items,
});

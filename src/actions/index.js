import swapi from '../apis/swapi';

export const fetchData = () => async (dispatch) => {
    const response = await swapi.get('/people');

    dispatch({ type: 'FETCH_DATA', payload: response.data.results });
};

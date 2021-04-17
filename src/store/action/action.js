import {Main_Type} from '../constant/ActionTypes';
import {getRequest}
export function test(value) {
  console.log(value);

  return async (dispatch) => {
    dispatch({
      type: Main_Type,
      payload: value,
    });
  };
}
export function getData(id) {
  console.log(value);

  return async (dispatch) => {
    const data = await getRequest(`endpoint/${id}`);

    dispatch({
      type: Main_Type,
      payload: data,
    });
  };
}
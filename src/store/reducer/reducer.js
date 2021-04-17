import {Main_Type} from '../constant/ActionTypes';

const INITIAL_STATE = {
  value: 1,
};




export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case Main_Type:
          console.log(action.payload , "---");
          return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
};

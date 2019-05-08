import {
  GET_LEADS,
  DELETE_LEAD,
  ADD_LEAD,
  CLEAR_LEADS
} from "../actions/types.js";

const initialState = {
  houses: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        houses: action.payload
      };
    default:
      return state;
  }
}

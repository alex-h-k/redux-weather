import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload.data];
  }
  // console.log("Action received", action);
  return state;
}

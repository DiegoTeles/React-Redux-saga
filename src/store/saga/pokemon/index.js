import { Reducer } from "redux";
import { PokemonTypes } from "./types";

const INITIAL_SYSTEM = {
 data: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonTypes.SYSTEM:
      return {
        ...state
      };
    case PokemonTypes.SYSTEM_SUCCESS:
      return {
        ...state,
        data: action.payload || undefined,
      };
    case PokemonTypes.SYSTEM_FAILURE:
      return {
        ...state,
        data: INITIAL_SYSTEM,
        error: action.payload
      };
    case PokemonTypes.CLEAR_STATUS:
      return {
        ...state,
        updated: false,
        error: ""
      };
    default:
      return state;
  }
};

export default reducer;

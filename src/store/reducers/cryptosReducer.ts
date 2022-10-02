import {
  CryptosAction,
  CryptosActionTypes,
  CryptosState,
} from "../../types/actionTypes/cryptos";

const initialState: CryptosState = {
  cryptos: [],
  isLoading: false,
  errors: null,
};

export const cryptosReducer = (
  state = initialState,
  action: CryptosAction
): CryptosState => {
  switch (action.type) {
    case CryptosActionTypes.GET_CRYPTOS_REQUEST:
      return {
        isLoading: true,
        errors: null,
        cryptos: action.payload ? [] : state.cryptos,
      };
    case CryptosActionTypes.GET_CRYPTOS_SUCCESS:
      return {
        isLoading: false,
        errors: null,
        cryptos: [...state.cryptos, ...action.payload],
      };
    case CryptosActionTypes.GET_CRYPTOS_FAIL:
      return { isLoading: false, errors: action.payload, cryptos: [] };
    default:
      return state;
  }
};

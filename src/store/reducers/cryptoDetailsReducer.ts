import {
  CryptoDetailsAction,
  CryptoDetailsState,
  CryptoDetailsActionTypes,
} from "../../types/cryptoDetails";

const initialState: CryptoDetailsState = {
  cryptoDetails: undefined,
  history: [],
  isLoading: false,
  errors: null,
};

export const cryptoDetailsReducer = (
  state = initialState,
  action: CryptoDetailsAction
): CryptoDetailsState => {
  switch (action.type) {
    case CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: null,
        cryptoDetails: state.cryptoDetails,
      };
    case CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        cryptoDetails: action.payload.crypto,
        history: action.payload.history,
      };
    case CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
        cryptoDetails: undefined,
      };
    default:
      return state;
  }
};

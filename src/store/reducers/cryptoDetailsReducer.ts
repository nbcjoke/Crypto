import {
  CryptoDetailsAction,
  CryptoDetailsState,
  CryptoDetailsActionTypes,
} from "../../types/cryptoDetails";

const initialState: CryptoDetailsState = {
  cryptoDetails: undefined,
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
        isLoading: true,
        errors: null,
        cryptoDetails: state.cryptoDetails,
      };
    case CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_SUCCESS:
      return {
        isLoading: false,
        errors: null,
        cryptoDetails: { ...state.cryptoDetails, ...action.payload },
      };
    case CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_FAIL:
      return {
        isLoading: false,
        errors: action.payload,
        cryptoDetails: undefined,
      };
    default:
      return state;
  }
};

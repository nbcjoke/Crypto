import {
  CryptosRankAction,
  CryptosRankActionTypes,
  CryptosRankState,
} from "../../types/actionTypes/cryptoRank";

const initialState: CryptosRankState = {
  cryptosRank: [],
  isLoading: false,
  errors: null,
};

export const cryptosRankReducer = (
  state = initialState,
  action: CryptosRankAction
): CryptosRankState => {
  switch (action.type) {
    case CryptosRankActionTypes.GET_CRYPTOS_RANK_REQUEST:
      return { isLoading: true, errors: null, cryptosRank: state.cryptosRank };
    case CryptosRankActionTypes.GET_CRYPTOS_RANK_SUCCESS:
      return {
        isLoading: false,
        errors: null,
        cryptosRank: action.payload,
      };
    case CryptosRankActionTypes.GET_CRYPTOS_RANK_FAIL:
      return { isLoading: false, errors: action.payload, cryptosRank: [] };
    default:
      return state;
  }
};

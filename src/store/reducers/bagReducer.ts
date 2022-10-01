import { BagService } from "../../hooks/useBag";
import { BagActions, BagActionTypes, BagState } from "../../types/bag";

const initialState: BagState = {
  addedCryptos: BagService.getAddedCryptos(),
};

export const bagReducer = (
  state = initialState,
  action: BagActions
): BagState => {
  switch (action.type) {
    case BagActionTypes.SET_CRYPTOS:
      return {
        addedCryptos: action.payload,
      };
    default:
      return state;
  }
};

import { Dispatch } from "redux";

import { BagActions, BagActionTypes } from "../../types/actionTypes/bag";
import { AddedCrypto } from "../../types/addedCrypto";

export const setBag = (cryptos: AddedCrypto[]) => {
  return async (dispatch: Dispatch<BagActions>) => {
    dispatch({
      type: BagActionTypes.SET_CRYPTOS,
      payload: cryptos,
    });
  };
};

import axios from "axios";
import { Dispatch } from "redux";

import { AddedCrypto, BagActions, BagActionTypes } from "../../types/bag";

export const setBag = (cryptos: AddedCrypto[]) => {
  return async (dispatch: Dispatch<BagActions>) => {
    dispatch({
      type: BagActionTypes.SET_CRYPTOS,
      payload: cryptos,
    });
  };
};

import axios from "axios";
import { Dispatch } from "redux";

import { CryptosAction, CryptosActionTypes } from "../../types/cryptos";
import {
  CryptoDetailsAction,
  CryptoDetailsActionTypes,
} from "../../types/cryptoDetails";

export const fetchCryptos = (limit: number, offset: number) => {
  return async (dispatch: Dispatch<CryptosAction>) => {
    try {
      dispatch({ type: CryptosActionTypes.GET_CRYPTOS_REQUEST });
      const response = await axios.get(
        `https://api.coincap.io/v2/assets?offset=${offset}&limit=${limit}`
      );
      console.log(response);
      dispatch({
        type: CryptosActionTypes.GET_CRYPTOS_SUCCESS,
        payload: response.data.data,
      });
    } catch (e) {
      dispatch({ type: CryptosActionTypes.GET_CRYPTOS_FAIL, payload: "Error" });
    }
  };
};

export const fetchCryptoDetails = (cryptoId: string) => {
  return async (dispatch: Dispatch<CryptoDetailsAction>) => {
    try {
      dispatch({ type: CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_REQUEST });
      const response = await axios.get(
        `https://api.coincap.io/v2/assets/${cryptoId}`
      );
      console.log(response);
      dispatch({
        type: CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_SUCCESS,
        payload: response.data.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_FAIL,
        payload: "Error",
      });
    }
  };
};

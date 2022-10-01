import axios from "axios";
import { Dispatch } from "redux";

import { CryptosAction, CryptosActionTypes } from "../../types/cryptos";
import {
  CryptoDetailsAction,
  CryptoDetailsActionTypes,
} from "../../types/cryptoDetails";
import {
  CryptosRankAction,
  CryptosRankActionTypes,
} from "../../types/cryptoRank";

export const fetchCryptos = (
  limit: number,
  offset: number,
  clearState: boolean = false
) => {
  return async (dispatch: Dispatch<CryptosAction>) => {
    try {
      dispatch({
        type: CryptosActionTypes.GET_CRYPTOS_REQUEST,
        payload: clearState,
      });
      const response = await axios.get(
        `https://api.coincap.io/v2/assets?offset=${offset}&limit=${limit}`
      );
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
      const [crypto, history] = await axios.all([
        axios
          .get(`https://api.coincap.io/v2/assets/${cryptoId}`)
          .then((response) => response.data.data),
        axios
          .get(
            `https://api.coincap.io/v2/assets/${cryptoId}/history?interval=h1`
          )
          .then((response) => response.data.data),
      ]);
      dispatch({
        type: CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_SUCCESS,
        payload: { crypto, history },
      });
    } catch (e) {
      dispatch({
        type: CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_FAIL,
        payload: "Error",
      });
    }
  };
};

export const fetchCryptosRank = (limit: number) => {
  return async (dispatch: Dispatch<CryptosRankAction>) => {
    try {
      dispatch({ type: CryptosRankActionTypes.GET_CRYPTOS_RANK_REQUEST });
      const response = await axios.get(
        `https://api.coincap.io/v2/assets?limit=${limit}`
      );
      dispatch({
        type: CryptosRankActionTypes.GET_CRYPTOS_RANK_SUCCESS,
        payload: response.data.data,
      });
    } catch (e) {
      dispatch({
        type: CryptosRankActionTypes.GET_CRYPTOS_RANK_FAIL,
        payload: "Error",
      });
    }
  };
};

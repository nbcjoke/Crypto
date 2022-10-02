import { Crypto } from "../crypto";
import { History } from "../history";

export interface CryptoDetailsState {
  cryptoDetails: Crypto | undefined;
  history: History[];
  isLoading: boolean;
  errors: null | string;
}

export enum CryptoDetailsActionTypes {
  GET_CRYPTO_DETAILS_REQUEST = "GET_CRYPTO_DETAILS_REQUEST",
  GET_CRYPTO_DETAILS_SUCCESS = "GET_CRYPTO_DETAILS_SUCCESS",
  GET_CRYPTO_DETAILS_FAIL = "GET_CRYPTO_DETAILS_FAIL",
}

interface GetCryptoDetailsRequestAction {
  type: CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_REQUEST;
}

interface GetCryptoDetailsSuccessAction {
  type: CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_SUCCESS;
  payload: {
    crypto: Crypto;
    history: History[];
  };
}

interface GetCryptoDetailsFailAction {
  type: CryptoDetailsActionTypes.GET_CRYPTO_DETAILS_FAIL;
  payload: string;
}

export type CryptoDetailsAction =
  | GetCryptoDetailsRequestAction
  | GetCryptoDetailsSuccessAction
  | GetCryptoDetailsFailAction;

export interface CryptosState {
  cryptos: any[];
  isLoading: boolean;
  errors: null | string;
}

export enum CryptosActionTypes {
  GET_CRYPTOS_REQUEST = "GET_CRYPTOS_REQUEST",
  GET_CRYPTOS_SUCCESS = "GET_CRYPTOS_SUCCESS",
  GET_CRYPTOS_FAIL = "GET_CRYPTOS_FAIL",
}

interface GetCryptosRequestAction {
  type: CryptosActionTypes.GET_CRYPTOS_REQUEST;
  payload?: boolean;
}

interface GetCryptosSuccessAction {
  type: CryptosActionTypes.GET_CRYPTOS_SUCCESS;
  payload: any[];
}

interface GetCryptosFailAction {
  type: CryptosActionTypes.GET_CRYPTOS_FAIL;
  payload: string;
}

export type CryptosAction =
  | GetCryptosRequestAction
  | GetCryptosSuccessAction
  | GetCryptosFailAction;

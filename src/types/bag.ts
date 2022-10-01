import { Crypto } from "./cryptoDetails";

export interface AddedCrypto {
  id: string;
  name: string;
  total: number;
  amount: number;
}

export interface BagState {
  addedCryptos: AddedCrypto[];
}

export enum BagActionTypes {
  SET_CRYPTOS = "SET_CRYPTOS",
}

interface SetCryptosAction {
  type: BagActionTypes.SET_CRYPTOS;
  payload: AddedCrypto[];
}

export type BagActions = SetCryptosAction;

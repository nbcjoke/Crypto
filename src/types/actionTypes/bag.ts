import { AddedCrypto } from "../addedCrypto";

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

import { combineReducers } from "redux";

import { cryptosReducer } from "./cryptosReducer";
import { cryptoDetailsReducer } from "./cryptoDetailsReducer";
import { cryptosRankReducer } from "./cryptosRankReducer";

export const rootReducer = combineReducers({
  cryptos: cryptosReducer,
  cryptoDetails: cryptoDetailsReducer,
  cryptosRank: cryptosRankReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

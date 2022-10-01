import { combineReducers } from "redux";

import { cryptosReducer } from "./cryptosReducer";
import { cryptoDetailsReducer } from "./cryptoDetailsReducer";
import { cryptosRankReducer } from "./cryptosRankReducer";
import { bagReducer } from "./bagReducer";

export const rootReducer = combineReducers({
  cryptos: cryptosReducer,
  cryptoDetails: cryptoDetailsReducer,
  cryptosRank: cryptosRankReducer,
  bag: bagReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

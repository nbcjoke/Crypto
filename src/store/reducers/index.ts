import { combineReducers } from "redux";

import { cryptosReducer } from "./cryptosReducer";
import { cryptoDetailsReducer } from "./cryptoDetailsReducer";

export const rootReducer = combineReducers({
  cryptos: cryptosReducer,
  cryptoDetails: cryptoDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from "redux";

import { cryptosReducer } from "./cryptosReducer";

export const rootReducer = combineReducers({
  cryptos: cryptosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

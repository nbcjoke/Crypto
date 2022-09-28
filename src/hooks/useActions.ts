import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as CryptosActionCreators from "../store/action-creators/cryptos";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(CryptosActionCreators, dispatch);
};

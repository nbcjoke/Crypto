import * as CryptosActionCreators from "./cryptos";
import * as BagActionCreators from "./bag";

export default {
  ...CryptosActionCreators,
  ...BagActionCreators,
};

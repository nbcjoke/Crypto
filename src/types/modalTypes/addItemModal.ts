import { Crypto } from "../crypto";

export interface AddItemModalProps {
  crypto: Crypto;
  isShowing: boolean;
  hide: () => void;
}

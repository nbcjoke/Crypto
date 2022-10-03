import React, { useState, useEffect } from "react";

import { BagService } from "../../../hooks/useBag";
import { BuyCryptoButtonComponent } from "../../buttons/buyButton/BuyCryptoButton";
import { useActions } from "../../../hooks/useActions";

import { Crypto } from "../../../types/crypto";
import * as styles from "./style";

interface AddItemModalProps {
  crypto: Crypto;
  isShowing: boolean;
  hide: () => void;
}

export const AddItemModal: React.FC<AddItemModalProps> = ({
  crypto,
  isShowing,
  hide,
}) => {
  const [amount, setAmount] = useState(1);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+event.target.value);
  };

  const { setBag } = useActions();

  const addItem = (crypto: Crypto, amount: number) => {
    const cryptos = BagService.addItemToCart(crypto, amount);
    setBag(cryptos);
    hide();
  };

  const result = () => {
    if (amount <= 0) {
      return;
    }
    const price = +parseFloat(crypto.priceUsd).toFixed(2);
    const sum = (amount * price).toFixed(2);
    return `${amount}*${price} = ${sum}`;
  };

  useEffect(() => {
    if (amount < 1) {
      hide();
    }
  }, [amount]);

  return (
    <>
      {isShowing && (
        <>
          <styles.ModalOverlay />
          <styles.ModalWrapper
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <styles.Modal>
              <styles.ModalHeader>
                <styles.ModalTitle>
                  {crypto.name}({crypto.symbol})
                </styles.ModalTitle>
                <styles.ModalCloseButton
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </styles.ModalCloseButton>
              </styles.ModalHeader>
              <styles.ModalPrice>
                ${parseFloat(crypto.priceUsd).toFixed(2)}
              </styles.ModalPrice>
              <styles.ModalFormContainer>
                <styles.ModalInput
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={changeHandler}
                />
                <BuyCryptoButtonComponent
                  handleClick={() => addItem(crypto, amount)}
                />
                <div>{result()}</div>
              </styles.ModalFormContainer>
            </styles.Modal>
          </styles.ModalWrapper>
        </>
      )}
    </>
  );
};

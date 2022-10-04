import React, { useState, useEffect } from "react";

import { BagService } from "../../../hooks/useBag";
import { useActions } from "../../../hooks/useActions";
import { ButtonComponent } from "../../button/Button";

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

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
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
              <styles.ModalFormContainer onSubmit={(e) => onSubmit(e)}>
                <styles.ModalInput
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={changeHandler}
                />
                <ButtonComponent
                  type="submit"
                  onClick={() => addItem(crypto, amount)}
                  color="#5baf6a"
                  children="Buy crypto"
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

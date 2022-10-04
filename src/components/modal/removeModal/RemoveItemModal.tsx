import React, { useState, useEffect } from "react";

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { BagService } from "../../../hooks/useBag";

import * as styles from "./style";
import { ButtonComponent } from "../../button/Button";

interface RemoveItemModalProps {
  isShowing: boolean;
  hide: () => void;
}

export const RemoveItemModal: React.FC<RemoveItemModalProps> = ({
  isShowing,
  hide,
}) => {
  const { addedCryptos } = useTypedSelector((state) => state.bag);

  const { setBag } = useActions();

  const removeHandler = (id: string) => {
    const cryptos = BagService.removeAddedCrypto(id);
    setBag(cryptos);
  };

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
                <styles.ModalTitle>Bag</styles.ModalTitle>
                <styles.ModalCloseButton
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </styles.ModalCloseButton>
              </styles.ModalHeader>
              {addedCryptos.map((crypto) => (
                <>
                  <styles.BagContainer key={crypto.id}>
                    <styles.BagWrapper>
                      <div>{crypto.name}</div>
                      <div>amount: {crypto.amount}</div>
                      <div>total: ${crypto.total.toFixed(2)}</div>
                    </styles.BagWrapper>
                  </styles.BagContainer>
                  <styles.BagButtonWrapper>
                    <ButtonComponent
                      onClick={() => removeHandler(crypto.id)}
                      color="#d9565b"
                      children="Sell"
                    />
                  </styles.BagButtonWrapper>
                  <styles.Divider></styles.Divider>
                </>
              ))}
            </styles.Modal>
          </styles.ModalWrapper>
        </>
      )}
    </>
  );
};

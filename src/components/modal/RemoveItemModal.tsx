import React, { useState, useEffect } from "react";

import { SellCryptoButtonComponent } from "../buttons/SellCryptoButton";

import styled from "styled-components";
import { useBag } from "../../hooks/useBag";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;
const Modal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;

  @media screen and (min-width: 350px) and (max-width: 639px) {
    max-width: 289px;
    padding: 1rem;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalCloseButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: 0.3;
  cursor: pointer;
  border: none;
`;

const ModalTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;

const ModalPrice = styled.h2`
  margin-top: 35px;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;

const ModalFormContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  gap: 25px;
  flex-direction: column;

  @media screen and (min-width: 350px) and (max-width: 639px) {
    margin-top: 25px;
    gap: 20px;
  }
`;

const BagContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const BagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const BagButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 7px;
  box-sizing: border-box;
  border: 1px solid black;
`;

interface Props {
  //   crypto: any;
  isShowing: boolean;
  hide: any;
}

export const RemoveItemModal: React.FC<Props> = ({
  //   crypto,
  isShowing,
  hide,
}) => {
  const { storedCryptos, getAddedCryptos, removeAddedCrypto } = useBag();

  let cryptos = getAddedCryptos();

  useEffect(() => {
    getAddedCryptos();
  }, [storedCryptos]);

  const removeHandler = (id: string) => {
    removeAddedCrypto(id);
    cryptos = getAddedCryptos();
  };

  return (
    <>
      {isShowing && (
        <>
          <ModalOverlay />
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <Modal>
              <ModalHeader>
                <ModalTitle>Bag</ModalTitle>
                <ModalCloseButton
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </ModalCloseButton>
              </ModalHeader>
              {cryptos.map((crypto) => (
                <>
                  <BagContainer key={crypto.id}>
                    <BagWrapper>
                      <div>{crypto.name}</div>
                      <div>amount: {crypto.amount}</div>
                      <div>total: ${crypto.total.toFixed(2)}</div>
                    </BagWrapper>
                    <BagButtonWrapper>
                      <SellCryptoButtonComponent
                        handleClick={() => removeHandler(crypto.id)}
                      />
                    </BagButtonWrapper>
                  </BagContainer>
                  <Divider></Divider>
                </>
              ))}
            </Modal>
          </ModalWrapper>
        </>
      )}
    </>
  );
};

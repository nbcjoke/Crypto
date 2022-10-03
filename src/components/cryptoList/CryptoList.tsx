import React, { useEffect, useState } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { AddCryptoButtonComponent } from "../buttons/addButton/AddCryptoButton";
import { ButtonComponent } from "../buttons/button/Button";
import { Link } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { AddItemModal } from "../modal/addModal/AddItemModal";

import { Crypto } from "../../types/crypto";
import * as styles from "./style";

export const CryptoList: React.FC = () => {
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto>();

  const { isShowing, toggle } = useModal();

  const { cryptos, errors } = useTypedSelector((state) => state.cryptos);

  const { fetchCryptos } = useActions();

  useEffect(() => {
    fetchCryptos(limit, offset, offset == 0);
  }, [offset]);

  const handleReset = () => {
    setOffset(0);
    window.scrollTo(0, 0);
  };

  const openPreview = (crypto: Crypto) => {
    setSelectedCrypto(crypto);
    toggle();
  };

  if (errors) {
    return <h1>{errors}</h1>;
  }

  return (
    <>
      <styles.CryptoItemWrapper>
        {cryptos.map((crypto) => (
          <Link to={`crypto/${crypto.id}`}>
            <styles.CryptoItem key={crypto.id}>
              <styles.CryptoTitleWrapper>
                <styles.CryptoName>{crypto.name}</styles.CryptoName>
                <styles.CryptoSymbol>{crypto.symbol}</styles.CryptoSymbol>
              </styles.CryptoTitleWrapper>
              <styles.CryptoRank>Rank: {crypto.rank}</styles.CryptoRank>
              <styles.CryptoPrice>
                Price: ${parseFloat(crypto.priceUsd).toFixed(2)}
              </styles.CryptoPrice>
              <styles.AddButtonWrapper>
                <AddCryptoButtonComponent
                  handleClick={() => openPreview(crypto)}
                />
              </styles.AddButtonWrapper>
            </styles.CryptoItem>
          </Link>
        ))}
      </styles.CryptoItemWrapper>
      <styles.ButtonsWrapper>
        <ButtonComponent
          onClick={() => setOffset(offset + 20)}
          children="Show more"
        />
        <ButtonComponent onClick={handleReset} children="Reset" />
      </styles.ButtonsWrapper>
      {isShowing && selectedCrypto && (
        <AddItemModal
          crypto={selectedCrypto}
          isShowing={isShowing}
          hide={toggle}
        />
      )}
    </>
  );
};

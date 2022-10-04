import React, { useState, useEffect } from "react";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useModal } from "../../hooks/useModal";
import { RemoveItemModal } from "../modal/removeModal/RemoveItemModal";
import { ViewProfileButtonComponent } from "../viewProfile/ViewProfileButton";

import * as styles from "./style";

export const HeaderComponent: React.FC = () => {
  const [limit, setLimit] = useState(3);

  const { isShowing, toggle } = useModal();

  const { cryptosRank, isLoading, errors } = useTypedSelector(
    (state) => state.cryptosRank
  );

  const { fetchCryptosRank } = useActions();

  useEffect(() => {
    fetchCryptosRank(limit);
  }, []);

  if (errors) {
    return <h1>{errors}</h1>;
  }

  return (
    <>
      <styles.Header>
        <styles.HeaderContainer>
          <styles.CryptoRankContainer>
            {cryptosRank.map((cryptoRank) => (
              <styles.CryptoRankWrapper key={cryptoRank.id}>
                <styles.CryptoRankName>
                  {cryptoRank.name}:
                </styles.CryptoRankName>
                <div>${parseFloat(cryptoRank.priceUsd).toFixed(2)}</div>
              </styles.CryptoRankWrapper>
            ))}
          </styles.CryptoRankContainer>
          <styles.CryptoRankButton>
            <ViewProfileButtonComponent handleClick={toggle} />
          </styles.CryptoRankButton>
        </styles.HeaderContainer>
      </styles.Header>
      {isShowing && <RemoveItemModal isShowing={isShowing} hide={toggle} />}
    </>
  );
};

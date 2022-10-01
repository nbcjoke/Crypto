import React, { useState, useEffect } from "react";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useModal } from "../../hooks/useModal";
import { RemoveItemModal } from "../modal/RemoveItemModal";
import { ViewProfileButtonComponent } from "../buttons/ViewProfileButton";

import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  box-sizing: border-box;
  padding: 20px 100px;
  width: 100%;
  height: 90px;
  background: #e2e2e2;
  box-shadow: 0px 0px 9px 5px rgb(184 181 181);

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    padding: 20px 35px;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    padding: 20px 15px;
    height: 110px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-beetwen;
`;

const CryptoRankContainer = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 350px) and (max-width: 639px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const CryptoRankButton = styled.div`
  margin-left: auto;
  margin-right: 60px;
`;

const CryptoRankWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CryptoRankName = styled.div`
  margin-right: 7px;
`;

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
      <Header>
        <HeaderContainer>
          <CryptoRankContainer>
            {cryptosRank.map((cryptoRank) => (
              <CryptoRankWrapper key={cryptoRank.id}>
                <CryptoRankName>{cryptoRank.name}:</CryptoRankName>
                <div>${parseFloat(cryptoRank.priceUsd).toFixed(2)}</div>
              </CryptoRankWrapper>
            ))}
          </CryptoRankContainer>
          <CryptoRankButton>
            <ViewProfileButtonComponent handleClick={toggle} />
          </CryptoRankButton>
        </HeaderContainer>
      </Header>
      {isShowing && <RemoveItemModal isShowing={isShowing} hide={toggle} />}
    </>
  );
};

import React, { useEffect, useState } from "react";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { AddCryptoButtonComponent } from "./buttons/AddCryptoButton";
import { Button } from "./buttons/Button";
import { Link } from "react-router-dom";

import styled from "styled-components";

const CryptoItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const CryptoItem = styled.div`
  border-radius: 5px;
  padding: 20px;
  width: 350px;
  height: 300px;
  background: #efefef;
`;

const CryptoTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CryptoName = styled.h1`
  font-size: 18px;
`;

const CryptoSymbol = styled.h1`
  font-size: 16px;
`;

const CryptoPrice = styled.p`
  margin: 20px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

const CryptoRank = styled.p`
  margin: 20px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  gap: 30px;
`;

export const CryptoList: React.FC = () => {
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  const { cryptos, isLoading, errors } = useTypedSelector(
    (state) => state.cryptos
  );

  const { fetchCryptos } = useActions();

  useEffect(() => {
    fetchCryptos(limit, offset);
  }, [offset]);

  const handleReset = () => {
    setOffset(0);
    window.scrollTo(0, 0);
  };

  if (errors) {
    return <h1>{errors}</h1>;
  }

  return (
    <>
      <CryptoItemWrapper>
        {cryptos.map((crypto) => (
          <Link to={`crypto/${crypto.id}`}>
            <CryptoItem key={crypto.id}>
              <CryptoTitleWrapper>
                <CryptoName>{crypto.name}</CryptoName>
                <CryptoSymbol>{crypto.symbol}</CryptoSymbol>
              </CryptoTitleWrapper>
              <CryptoRank>Rank: {crypto.rank}</CryptoRank>
              <CryptoPrice>
                Price: ${parseFloat(crypto.priceUsd).toFixed(2)}
              </CryptoPrice>
              <AddButtonWrapper>
                <AddCryptoButtonComponent />
              </AddButtonWrapper>
            </CryptoItem>
          </Link>
        ))}
      </CryptoItemWrapper>
      <ButtonsWrapper>
        <Button onClick={() => setOffset(offset + 20)}>Show More</Button>
        <Button onClick={handleReset}>Reset</Button>
      </ButtonsWrapper>
    </>
  );
};

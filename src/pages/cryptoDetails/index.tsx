import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { AddCryptoButtonComponent } from "../../components/buttons/AddCryptoButton";
import { LineChart } from "../../components/LineChart";
import { AddItemModal } from "../../components/modal/AddItemModal";
import { useModal } from "../../hooks/useModal";

import styled from "styled-components";

const Container = styled.div`
  padding: 100px;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    padding: 100px 30px;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    padding: 100px 15px;
  }
`;

const CryptosTitles = styled.h1`
  margin-top: 80px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
`;

const CryptosWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  padding: 0 100px;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: column;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    padding: 0 30px;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    padding: 0 15px;
  }
`;

const CryptoDetailsWrapper = styled.div`
  padding: 50px 100px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: #e2e2e2;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    padding: 50px 30px;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    padding: 25px 15px;
  }
`;

const CryptoDetailsName = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 22px;
`;

const CryptoDetailsContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 15px;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    margin-top: 30px;
    align-items: center;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    margin-top: 30px;
    align-items: center;
  }
`;

const CryptoDetailsGraphics = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const CryptoDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CryptoDetailsTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 10px auto 15px 0;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    margin: 5px auto 5px 0;
  }
`;

const CryptoDetailsTitleInfo = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const CryptoDetailsTitleLink = styled.a`
  text-decoration: none;
  font-size: 22px;
  font-weight: 600;
  color: black;
  transition: 0.3s;
  &:hover {
    color: #7878d2;
  }
`;

const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 45px;
`;

export const CryptoDetails: React.FC = () => {
  const { cryptoId } = useParams();

  const { cryptoDetails, errors, history } = useTypedSelector(
    (state) => state.cryptoDetails
  );

  const { isShowing, toggle } = useModal();

  const { fetchCryptoDetails } = useActions();

  useEffect(() => {
    fetchCryptoDetails(cryptoId!);
  }, []);

  if (!cryptoDetails) {
    return <h1>Not found</h1>;
  }

  if (errors) {
    return <h1>{errors}</h1>;
  }

  return (
    <Container>
      <CryptosTitles>Crypto Details Page</CryptosTitles>
      <CryptosWrapper>
        <CryptoDetailsWrapper>
          <CryptoDetailsName>
            {cryptoDetails.name}({cryptoDetails.symbol})
          </CryptoDetailsName>
          <CryptoDetailsContent>
            <CryptoDetailsGraphics>
              <LineChart history={history} />
            </CryptoDetailsGraphics>
            <CryptoDetailsInfo>
              <CryptoDetailsTitle>
                Rank:{" "}
                <CryptoDetailsTitleInfo>
                  {cryptoDetails.rank}
                </CryptoDetailsTitleInfo>
              </CryptoDetailsTitle>
              <CryptoDetailsTitle>
                Price:{" "}
                <CryptoDetailsTitleInfo>
                  ${parseFloat(cryptoDetails.priceUsd).toFixed(2)}
                </CryptoDetailsTitleInfo>
              </CryptoDetailsTitle>
              <CryptoDetailsTitle>
                Max Price 24Hr:{" "}
                <CryptoDetailsTitleInfo>
                  ${parseFloat(cryptoDetails.vwap24Hr).toFixed(2)}
                </CryptoDetailsTitleInfo>
              </CryptoDetailsTitle>
              <CryptoDetailsTitle>
                Change percent 24Hr:{" "}
                <CryptoDetailsTitleInfo>
                  {parseFloat(cryptoDetails.changePercent24Hr).toFixed(2)}%
                </CryptoDetailsTitleInfo>
              </CryptoDetailsTitle>
              <CryptoDetailsTitle>
                Link:{" "}
                <CryptoDetailsTitleLink
                  href={cryptoDetails.explorer}
                  target="_blank"
                >
                  Link
                </CryptoDetailsTitleLink>
              </CryptoDetailsTitle>
              <CryptoDetailsTitle>
                Supply:{" "}
                <CryptoDetailsTitleInfo>
                  {parseFloat(cryptoDetails.supply).toFixed(2)}
                </CryptoDetailsTitleInfo>
              </CryptoDetailsTitle>
              <CryptoDetailsTitle>
                Max Supply:{" "}
                <CryptoDetailsTitleInfo>
                  {parseFloat(cryptoDetails.maxSupply).toFixed(2)}
                </CryptoDetailsTitleInfo>
              </CryptoDetailsTitle>
              <CryptoDetailsTitle>
                Volume 24Hr:{" "}
                <CryptoDetailsTitleInfo>
                  ${parseFloat(cryptoDetails.volumeUsd24Hr).toFixed(2)}
                </CryptoDetailsTitleInfo>
              </CryptoDetailsTitle>
            </CryptoDetailsInfo>
          </CryptoDetailsContent>
          <AddButtonWrapper>
            <AddCryptoButtonComponent handleClick={toggle} />
          </AddButtonWrapper>
        </CryptoDetailsWrapper>
      </CryptosWrapper>
      {isShowing && (
        <AddItemModal
          crypto={cryptoDetails}
          isShowing={isShowing}
          hide={toggle}
        />
      )}
    </Container>
  );
};

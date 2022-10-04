import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { LineChart } from "../../components/lineChart/LineChart";
import { AddItemModal } from "../../components/modal/addModal/AddItemModal";
import { useModal } from "../../hooks/useModal";
import { ButtonComponent } from "../../components/button/Button";

import * as styles from "./style";

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
    <styles.Container>
      <styles.CryptosTitles>Crypto Details Page</styles.CryptosTitles>
      <styles.CryptosWrapper>
        <styles.CryptoDetailsWrapper>
          <styles.CryptoDetailsInfoTitle>
            <Link to={"/"}>
              <styles.CryptoDetailsBack>
                Back to main page
              </styles.CryptoDetailsBack>
            </Link>
            <styles.CryptoDetailsName>
              {cryptoDetails.name}({cryptoDetails.symbol})
            </styles.CryptoDetailsName>
          </styles.CryptoDetailsInfoTitle>
          <styles.CryptoDetailsContent>
            <styles.CryptoDetailsGraphics>
              <LineChart history={history} />
            </styles.CryptoDetailsGraphics>
            <styles.CryptoDetailsInfo>
              <styles.CryptoDetailsTitle>
                Rank:{" "}
                <styles.CryptoDetailsTitleInfo>
                  {cryptoDetails.rank}
                </styles.CryptoDetailsTitleInfo>
              </styles.CryptoDetailsTitle>
              <styles.CryptoDetailsTitle>
                Price:{" "}
                <styles.CryptoDetailsTitleInfo>
                  ${parseFloat(cryptoDetails.priceUsd).toFixed(2)}
                </styles.CryptoDetailsTitleInfo>
              </styles.CryptoDetailsTitle>
              <styles.CryptoDetailsTitle>
                Max Price 24Hr:{" "}
                <styles.CryptoDetailsTitleInfo>
                  ${parseFloat(cryptoDetails.vwap24Hr).toFixed(2)}
                </styles.CryptoDetailsTitleInfo>
              </styles.CryptoDetailsTitle>
              <styles.CryptoDetailsTitle>
                Change percent 24Hr:{" "}
                <styles.CryptoDetailsTitleInfo>
                  {parseFloat(cryptoDetails.changePercent24Hr).toFixed(2)}%
                </styles.CryptoDetailsTitleInfo>
              </styles.CryptoDetailsTitle>
              <styles.CryptoDetailsTitle>
                Link:{" "}
                <styles.CryptoDetailsTitleLink
                  href={cryptoDetails.explorer}
                  target="_blank"
                >
                  {cryptoDetails.explorer}
                </styles.CryptoDetailsTitleLink>
              </styles.CryptoDetailsTitle>
              <styles.CryptoDetailsTitle>
                Supply:{" "}
                <styles.CryptoDetailsTitleInfo>
                  {parseFloat(cryptoDetails.supply).toFixed(2)}
                </styles.CryptoDetailsTitleInfo>
              </styles.CryptoDetailsTitle>
              <styles.CryptoDetailsTitle>
                Max Supply:{" "}
                {cryptoDetails.maxSupply ? (
                  <styles.CryptoDetailsTitleInfo>
                    {parseFloat(cryptoDetails.maxSupply).toFixed(2)}
                  </styles.CryptoDetailsTitleInfo>
                ) : (
                  "-"
                )}
              </styles.CryptoDetailsTitle>
              <styles.CryptoDetailsTitle>
                Volume 24Hr:{" "}
                <styles.CryptoDetailsTitleInfo>
                  ${parseFloat(cryptoDetails.volumeUsd24Hr).toFixed(2)}
                </styles.CryptoDetailsTitleInfo>
              </styles.CryptoDetailsTitle>
            </styles.CryptoDetailsInfo>
          </styles.CryptoDetailsContent>
          <styles.AddButtonWrapper>
            <ButtonComponent
              onClick={() => toggle()}
              children="Add crypto"
              color="#5baf6a"
            />
          </styles.AddButtonWrapper>
        </styles.CryptoDetailsWrapper>
      </styles.CryptosWrapper>
      {isShowing && (
        <AddItemModal
          crypto={cryptoDetails}
          isShowing={isShowing}
          hide={toggle}
        />
      )}
    </styles.Container>
  );
};

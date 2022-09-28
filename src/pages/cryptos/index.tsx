import React, { useState } from "react";

import { Button } from "../../components/buttons/Button";
import { CryptoList } from "../../components/CryptoList";

import styled from "styled-components";

const Container = styled.div`
  padding: 100px;
`;

const CryptosTitles = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
`;

const CryptosWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: column;
`;

export const Cryptos: React.FC = () => {
  return (
    <Container>
      <CryptosTitles>Cryptos Page</CryptosTitles>
      <CryptosWrapper>
        <CryptoList />
      </CryptosWrapper>
    </Container>
  );
};

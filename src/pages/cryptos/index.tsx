import React, { useState } from "react";

import { CryptoList } from "../../components/cryptoList/CryptoList";

import * as styles from "./style";

export const Cryptos: React.FC = () => {
  return (
    <styles.Container>
      <styles.CryptosTitles>Cryptos Page</styles.CryptosTitles>
      <styles.CryptosWrapper>
        <CryptoList />
      </styles.CryptosWrapper>
    </styles.Container>
  );
};

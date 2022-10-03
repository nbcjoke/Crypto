import React from "react";

import * as styles from "./style";

type ButtonProps = {
  handleClick: () => void;
};

export const SellCryptoButtonComponent = (props: ButtonProps) => {
  const clickHandler = () => {
    props.handleClick();
  };

  return (
    <styles.SellCryptoButton onClick={() => clickHandler()}>
      Sell
    </styles.SellCryptoButton>
  );
};

import React from "react";

import * as styles from "./style";

type ButtonProps = {
  handleClick: () => void;
};

export const BuyCryptoButtonComponent = (props: ButtonProps) => {
  const clickHandler = () => {
    props.handleClick();
  };

  return (
    <styles.BuyCryptoButton onClick={() => clickHandler()}>
      Buy Crypto
    </styles.BuyCryptoButton>
  );
};

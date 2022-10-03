import React from "react";

import * as styles from "./style";

type ButtonProps = {
  handleClick: () => void;
};

export const AddCryptoButtonComponent = (props: ButtonProps) => {
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    props.handleClick();
  };

  return (
    <styles.AddCryptoButton onClick={(event) => clickHandler(event)}>
      Add to bag
    </styles.AddCryptoButton>
  );
};

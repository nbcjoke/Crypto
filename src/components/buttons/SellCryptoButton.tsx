import React from "react";

import styled from "styled-components";

type ButtonProps = {
  handleClick: () => void;
};

const SellCryptoButton = styled.button`
  width: 160px;
  padding: 8px 20px;
  border-radius: 5px;
  border: none;
  color: black;
  background: #d9565b;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

export const SellCryptoButtonComponent = (props: ButtonProps) => {
  const clickHandler = () => {
    props.handleClick();
  };

  return (
    <SellCryptoButton onClick={() => clickHandler()}>Sell</SellCryptoButton>
  );
};

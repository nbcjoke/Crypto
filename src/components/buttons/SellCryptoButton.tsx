import React from "react";

import { ButtonProps } from "../../types/buttonTypes/button";
import styled from "styled-components";

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
  transition: 0.3s;

  &:hover {
    background: #da3c42;
  }
`;

export const SellCryptoButtonComponent = (props: ButtonProps) => {
  const clickHandler = () => {
    props.handleClick();
  };

  return (
    <SellCryptoButton onClick={() => clickHandler()}>Sell</SellCryptoButton>
  );
};

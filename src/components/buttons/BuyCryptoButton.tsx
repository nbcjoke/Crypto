import React from "react";

import styled from "styled-components";

type ButtonProps = {
  handleClick: () => void;
};

const BuyCryptoButton = styled.button`
  width: 160px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: black;
  background: #5baf6a;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

export const BuyCryptoButtonComponent = (props: ButtonProps) => {
  const clickHandler = () => {
    props.handleClick();
  };

  return (
    <BuyCryptoButton onClick={() => clickHandler()}>Buy Crypto</BuyCryptoButton>
  );
};

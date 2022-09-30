import React from "react";

import styled from "styled-components";

type ButtonProps = {
  handleClick: () => void;
};

export const AddCryptoButton = styled.button`
  width: 160px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: black;
  background: #85c991;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #81d469;
  }
`;

export const AddCryptoButtonComponent = (props: ButtonProps) => {
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    props.handleClick();
  };

  return (
    <AddCryptoButton onClick={(event) => clickHandler(event)}>
      Add to bag
    </AddCryptoButton>
  );
};

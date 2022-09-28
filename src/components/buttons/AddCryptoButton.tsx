import React from "react";

import styled from "styled-components";

export const AddCryptoButton = styled.button`
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

export const AddCryptoButtonComponent: React.FC = () => {
  return <AddCryptoButton>Add to bag</AddCryptoButton>;
};

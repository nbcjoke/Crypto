import React from "react";

import styled from "styled-components";
const bag = require("../../static/icons/bag.svg") as string;
const briefcase = require("../../static/icons/briefcase.svg") as string;

type ButtonProps = {
  handleClick: () => void;
};

const ViewProfileButton = styled.button`
  width: 48px;
  height: 48px;
`;

const Image = styled.img``;

export const ViewProfileButtonComponent = (props: ButtonProps) => {
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.handleClick();
  };

  return (
    <ViewProfileButton onClick={(event) => clickHandler(event)}>
      <Image src={briefcase} alt="bag" />
    </ViewProfileButton>
  );
};

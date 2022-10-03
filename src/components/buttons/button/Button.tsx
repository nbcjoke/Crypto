import React from "react";

import * as styles from "./style";
interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
}

export const ButtonComponent = (props: ButtonProps) => {
  const clickHandler = () => {
    props.onClick();
  };
  return <styles.Button onClick={clickHandler}>{props.children}</styles.Button>;
};

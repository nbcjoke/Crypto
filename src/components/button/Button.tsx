import React from "react";

import * as styles from "./style";
interface ButtonProps {
  type?: any;
  children?: React.ReactNode;
  onClick: () => void;
  color: string;
}

export const ButtonComponent = (props: ButtonProps) => {
  const clickHandler = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    event.stopPropagation();
    props.onClick();
  };
  return (
    <styles.Button
      style={{ background: props.color }}
      type={props.type}
      onClick={(event) => clickHandler(event)}
    >
      {props.children}
    </styles.Button>
  );
};

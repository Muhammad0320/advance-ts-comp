import { ComponentPropsWithoutRef, FC } from "react";

type AnchorType = ComponentPropsWithoutRef<"a"> & { el: "anchor" };

type ButtonType = ComponentPropsWithoutRef<"button"> & { el: "button" };

type PropsType = AnchorType | ButtonType;

const Button: FC<PropsType> = (props) => {
  if (props.el === "anchor") {
    return <a {...props}> A link </a>;
  }

  return <button {...props}>A button</button>;
};

export default Button;

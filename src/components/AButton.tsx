import { FC, type ComponentPropsWithoutRef } from "react";

// With Type predicate

type AnchorType = ComponentPropsWithoutRef<"a">;

type ButtonType = ComponentPropsWithoutRef<"button">;

type PropsType = AnchorType | ButtonType;

const isAnchorProp = (props: PropsType): props is AnchorType => {
  return "href" in props;
};

const AButton: FC<PropsType> = (props) => {
  if (isAnchorProp(props)) {
    return <a {...props}> A link </a>;
  }

  return <button {...props}>A fucking Button</button>;
};

export default AButton;

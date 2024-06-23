import { FC, type ComponentPropsWithoutRef } from "react";

// With Type predicate

type AnchorType = ComponentPropsWithoutRef<"a"> & { href?: string };

type ButtonType = ComponentPropsWithoutRef<"button"> & { href?: never };

type PropsType = AnchorType | ButtonType;

const isAnchorProp = (props: PropsType): props is AnchorType => {
  return "href" in props;
};

const AButton: FC<PropsType> = (props) => {
  if (isAnchorProp(props)) {
    return (
      <a className="button" {...props}>
        {" "}
        A link{" "}
      </a>
    );
  }

  return (
    <button className="button" {...props}>
      A fucking Button
    </button>
  );
};

export default AButton;

import { ComponentPropsWithoutRef, FC } from "react";

type FormType = ComponentPropsWithoutRef<"form">;

const Form: FC<FormType> = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export default Form;

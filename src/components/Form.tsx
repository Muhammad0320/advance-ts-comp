import { ComponentPropsWithoutRef, FC, FormEvent } from "react";

type FormType = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form: FC<FormType> = ({ children, onSave, ...props }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData);

    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};

export default Form;

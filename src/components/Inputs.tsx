import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputType = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputType>(function Input(
  { id, label, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}> {label} </label>
      <input ref={ref} id={id} {...props} />
    </p>
  );
});

export default Input;

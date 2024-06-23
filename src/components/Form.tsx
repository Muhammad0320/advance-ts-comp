import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from 'react';

type FormType = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};


 export type FormHandle = {
   clear: () => void;
 };   


 const Form = forwardRef<FormHandle, FormType>( function  Form    ( { children, onSave, ...props }, ref ) {


    const formRef = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {

                return {

                    clear() {

                        formRef.current?.reset();

                    },

                }

    })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData);

    onSave(data);
  };



  return (
    <form onSubmit={handleSubmit} {...props} ref={formRef} >
      {children}
    </form>
  );
})


export default Form
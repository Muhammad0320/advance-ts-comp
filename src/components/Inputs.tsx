import { ComponentPropsWithoutRef } from "react";



type InputType = {

    id :string;
    label: string;

} & ComponentPropsWithoutRef<'input'>;



export default function Input  (  { id, label, ...props  }: InputType  ) {

    return (

        <p>

                <label htmlFor={id}>  {label} </label>
                <input id={id} {...props} />

        </p>

    )


}



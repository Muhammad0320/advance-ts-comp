import { useRef } from "react";
import Form, { FormHandle } from "./components/Form";
import Input from "./components/Inputs";
import Button from "./components/Buttons";
import AButton from "./components/AButton";

function App() {
  const formRef = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const formData = data as { name: string; age: string };

    console.log(formData);

    formRef.current?.clear();
  };

  return (
    <main>
      <Form onSave={handleSave}>
        <Input label="Name" id="name" type="string" />
        <Input label="Age" id="age" type="number" />
        <p>
          <AButton>Save</AButton>
        </p>
      </Form>
    </main>
  );
}

export default App;

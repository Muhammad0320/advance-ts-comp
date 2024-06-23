import Form from "./components/Form";
import Input from "./components/Inputs";

function App() {

  const handleSave = (data: unknown) => {
    const formData = data as { name: string; age: string };

    console.log(formData);
  };

  return (
    <main>
      <Form onSave={handleSave}>
        <Input label="Name" id="name" type="string" />
        <Input label="Age" id="age" type="number" />
      </Form>
    </main>
  );
}

export default App;

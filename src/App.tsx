import Form from "./components/Form";
import Input from "./components/Inputs";

function App() {
  return (
    <main>
      <Form>
        <Input label="Name" id="name" type="string" />
        <Input label="Age" id="age" type="number" />
      </Form>
    </main>
  );
}

export default App;

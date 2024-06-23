import Input from "./components/Inputs";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Age" type="number" />
    </main>
  );
}

export default App;

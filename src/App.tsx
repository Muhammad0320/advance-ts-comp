import Button from "./components/Buttons";
import Input from "./components/Inputs";

function App() {
  return (
    <main>
      <p>
        <Button el="anchor" href="https://google.com" />
      </p>

      <p>
        <Button el="button" disabled />
      </p>
    </main>
  );
}

export default App;

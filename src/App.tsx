import AButton from "./components/AButton";
import Button from "./components/Buttons";
import Input from "./components/Inputs";

function App() {
  return (
    <main>
      <p>
        <AButton href="https://google.com" />
      </p>

      <p>
        <AButton disabled />
      </p>
    </main>
  );
}

export default App;

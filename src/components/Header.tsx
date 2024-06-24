import { useTimer } from "../store/timerContext";
import AButton from "./UI/AButton";

export default function Header() {
  const { isRunning } = useTimer();

  return (
    <header>
      <h1>ReactTimer</h1>

      <AButton> {isRunning ? "Stop Timer" : "Start timer"} </AButton>
    </header>
  );
}

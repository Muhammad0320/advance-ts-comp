import { useTimer } from "../store/timerContext";
import AButton from "./UI/AButton";

export default function Header() {
  const { isRunning, startTimer, stopTimer } = useTimer();

  return (
    <header>
      <h1>ReactTimer</h1>

      <AButton onClick={isRunning ? stopTimer : startTimer}>
        {" "}
        {isRunning ? "Stop Timer" : "Start timer"}{" "}
      </AButton>
    </header>
  );
}


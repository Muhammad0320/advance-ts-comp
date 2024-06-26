import { useEffect, useRef, useState } from "react";
import { useTimer, type Timer as TimerProp } from "../store/timerContext.tsx";
import Container from "./UI/Container.tsx";

export default function Timer({ name, duration }: TimerProp) {
  const timeRef = useRef<number | null>(null);

  const { isRunning } = useTimer();

  const [remainingTime, Setremaining] = useState(duration * 1000);

  if (remainingTime <= 0 && timeRef.current) {
    clearInterval(timeRef.current);
  }

  useEffect(() => {
    let time: number;

    if (isRunning) {
      time = setInterval(() => {
        Setremaining((prevTime) => prevTime - 50);
      }, 50);

      timeRef.current = time;
    } else if (timeRef.current) {
      clearInterval(timeRef.current);
    }

    return () => clearInterval(time);
  }, [isRunning]);

  const formattedtime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>TODO: {name} </h2>
      <p>
        {" "}
        <progress max={duration} value={formattedtime} />{" "}
      </p>
      <p> {formattedtime} </p>
    </Container>
  );
}

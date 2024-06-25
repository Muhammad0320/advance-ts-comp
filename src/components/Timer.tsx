import { type Timer as TimerProp } from "../store/timerContext.tsx";
import Container from "./UI/Container.tsx";

export default function Timer({ name, duration }: TimerProp) {
  return (
    <Container as="article">
      <h2>TODO: {name} </h2>
      <p> {duration} </p>
    </Container>
  );
}

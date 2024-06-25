import { useRef } from "react";

import Form, { FormHandle } from "./UI/Form.tsx";
import Input from "./UI/Inputs.tsx";
import AButton from "./UI/AButton.tsx";
import { useTimer } from "../store/timerContext.tsx";

export default function AddTimer() {
  const form = useRef<FormHandle>(null);

  const { addTimer } = useTimer();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };

    addTimer({ name: extractedData.name, duration: +extractedData.duration });

    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <AButton>Add Timer</AButton>
      </p>
    </Form>
  );
}

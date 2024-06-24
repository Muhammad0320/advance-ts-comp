import { createContext, ReactNode, useContext } from "react";
import Timer from "../components/Timer";

type Timer = {
  name: string;
  duration: number;
};

type TimerType = {
  isRunning: boolean;
  timers: Timer[];
};

type TimerContextType = TimerType & {
  addTimer(timer: Timer): void;
  stopTimer(): void;
  deleteTimer(): void;
};

const TimerContext = createContext<TimerContextType | null>(null);

export const TimerContextProvider = function ({
  children,
}: {
  children: ReactNode;
}) {
  const ctxVal: TimerContextType = {
    timers: [],
    isRunning: false,
    addTimer(timer) {
      // ....
    },

    stopTimer() {
      // ...
    },

    deleteTimer() {
      // ...
    },
  };

  return (
    <TimerContext.Provider value={ctxVal}> {children} </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);

  if (!context)
    throw new Error("Timer context was used outside timer provider");

  return context;
};

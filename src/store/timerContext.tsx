import { createContext, ReactNode, useContext, useReducer } from "react";
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
  startTimer(): void;
};

const TimerContext = createContext<TimerContextType | null>(null);





type AddTimerAction = { type: 'ADD_TIMER', payload: Timer };

type  StartTimerAction = {  type: 'START_TIMER' }
type  StopTimerAction = {  type: 'STOP_TIMER' }

type Actions = AddTimerAction | StopTimerAction | StartTimerAction;


    const Initialstate: TimerType  = {

        isRunning: false,
        timers: []

};

const reducer = (state: TimerType, actions: Actions): TimerType => {

        if (actions.type ===  'ADD_TIMER')  { 
        
        return { 
        
            ...state,
            
           timers: [ ...state.timers,  {
            name: actions.payload.name,
            duration: actions. payload.duration
        
        
                    } ]


        }

          };

          if(actions.type === 'START_TIMER') {

            return {

                ...state,
                isRunning: true

            }

          }

          if(actions.type === 'STOP_TIMER') {

            return {

                ...state,
                isRunning: false

            }

          }



    return state;

}


export const TimerContextProvider = function ({
  children,
}: {
  children: ReactNode;
}) {

    const [ currrentTimer, dispatch ] = useReducer(reducer, Initialstate);

  const ctxVal: TimerContextType = {
    timers: currrentTimer.timers,
    isRunning: currrentTimer.isRunning,
    addTimer(timer) {
        
        dispatch({  type: 'ADD_TIMER', payload: timer})

    },

    stopTimer() {
        
        dispatch( { type: 'STOP_TIMER' })

    },

    startTimer() {

     dispatch( { type: 'START_TIMER' })
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



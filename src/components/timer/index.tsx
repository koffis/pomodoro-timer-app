import { FC, useState, useEffect } from "react";
import Chip from "../chip";
import Controls from "./subcomponents/controls";
import "./index.scss";

interface TimerProps {
  phaseOptions: {
    name: string;
    phase: string;
    duration: number;
    nextPhase: string;
  };
  phase: "focus" | "short" | "focus2" | "long";
  setPhase: (param: "focus" | "short" | "focus2" | "long") => void;
  allPhases: ("focus" | "short" | "focus2" | "long")[];
  setShowSettings: (param: boolean) => void;
  setAllPhases: (arr: ("focus" | "short" | "focus2" | "long")[]) => void;
}

const Timer: FC<TimerProps> = ({
  phase,
  allPhases,
  setPhase,
  phaseOptions,
  setAllPhases,
  setShowSettings
}) => {
  const getPadTime = (time: number) => time.toString().padStart(2, "0");

  const [timerState, setTimerState] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(phaseOptions.duration);

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - +minutes * 60);

  useEffect(() => {
    setTimeLeft(phaseOptions.duration);
  }, [phaseOptions]);

  useEffect(() => {
    const interval = setInterval(() => {
      timerState &&
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timerState]);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(phaseOptions.duration);
      let newPhase = allPhases.shift()!;
      setAllPhases([...allPhases, newPhase]);
      setPhase(newPhase);
    }
  }, [timeLeft]);

  return (
    <div className={`timer timer-${phase}`}>
      <Chip phase={phase} lable={phaseOptions.name} />
      <div className={`timer-display ${timerState ? "running" : "paused"}`}>
        {minutes} {seconds}
      </div>
      <Controls
        phase={phase}
        mainButtonAction={setTimerState}
        timerState={timerState}
        leftButtonAction={() => setShowSettings(true)}
        rightButtonActions={() => {
          let newPhase = allPhases.shift()!;
          setAllPhases([...allPhases, newPhase]);
          setPhase(newPhase);
          setTimerState(false);
        }}
      />
    </div>
  );
};

export default Timer;

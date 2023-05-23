import { FC, useEffect, useState } from "react";
import Timer from "./components/timer";
import "./styles/index.scss";
import "./assets/images/brain.svg";

const App: FC = () => {
  const [phase, setPhase] = useState<"focus" | "short" | "focus2" | "long">(
    "focus"
  );

  const [allPhases, setAllPhases] = useState<("focus" | "short" | "focus2" | "long")[]>([
    "short",
    "focus",
    "long",
    "focus",
  ])

  const [phaseOptions, setPhaseOptions] = useState<{
    name: string;
    phase: string;
    duration: number;
    nextPhase: string;
  }>({
    name: "Focus",
    phase: "focus",
    duration: 1500,
    nextPhase: "short",
  });

  useEffect(() => {
    switch (phase) {
      case "focus":
        setPhaseOptions({
          name: "Focus",
          phase: "focus",
          duration: 1500,
          nextPhase: "short",
        });
        break;
      case "short":
        setPhaseOptions({
          name: "Short Brake",
          phase: "short",
          duration: 300,
          nextPhase: "focus2",
        });
        break;
      case "focus2":
        setPhaseOptions({
          name: "Focus",
          phase: "focus2",
          duration: 1500,
          nextPhase: "long",
        });
        break;
      case "long":
        setPhaseOptions({
          name: "Long Break",
          phase: "focus2",
          duration: 900,
          nextPhase: "focus",
        });
        break;
      default:
        setPhaseOptions({
          name: "Focus",
          phase: "focus",
          duration: 1500,
          nextPhase: "short",
        });
    }
    console.log(phase)
  }, [phase]);

  return (
    <Timer
      phaseOptions={phaseOptions}
      phase={phase}
      setPhase={setPhase}
      allPhases={allPhases}
      setAllPhases={setAllPhases}
    />
  );
};

export default App;

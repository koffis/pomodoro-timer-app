import { FC, useEffect, useState } from "react";
import Timer from "./components/timer";
import Settings from "./components/settings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles/index.scss";

const App: FC = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [focusLength, setFocusLength] = useState<number>(1500);
  const [shortLeangth, setShortLength] = useState<number>(300);
  const [longLength, setLongLength] = useState<number>(900);
  const [notifications, setNotifications] = useState<boolean>(true);

  const [phase, setPhase] = useState<"focus" | "short" | "focus2" | "long">(
    "focus"
  );

  const [allPhases, setAllPhases] = useState<
    ("focus" | "short" | "focus2" | "long")[]
  >(["short", "focus", "long", "focus"]);

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
          duration: focusLength,
          nextPhase: "short",
        });
        break;
      case "short":
        setPhaseOptions({
          name: "Short Brake",
          phase: "short",
          duration: shortLeangth,
          nextPhase: "focus2",
        });
        break;
      case "focus2":
        setPhaseOptions({
          name: "Focus",
          phase: "focus2",
          duration: focusLength,
          nextPhase: "long",
        });
        break;
      case "long":
        setPhaseOptions({
          name: "Long Break",
          phase: "long",
          duration: longLength,
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
  }, [phase, focusLength, shortLeangth, longLength]);

  return (
    <div className={`pomodoro ${darkMode ? "darkMode" : ""}`}>
      <Timer
        toast={toast}
        setShowSettings={setShowSettings}
        phaseOptions={phaseOptions}
        phase={phase}
        setPhase={setPhase}
        allPhases={allPhases}
        setAllPhases={setAllPhases}
      />
      {showSettings && (
        <Settings
          toast={toast}
          setShowSettings={setShowSettings}
          phase={phase}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          focusLength={focusLength}
          setFocusLength={setFocusLength}
          shortLeangth={shortLeangth}
          setShortLength={setShortLength}
          longLength={longLength}
          setLongLength={setLongLength}
          notifications={notifications}
          setNotifications={setNotifications}
        />
      )}
      {notifications && (
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={darkMode ? "dark" : "light"}
        />
      )}
    </div>
  );
};

export default App;

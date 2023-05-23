import { FC, useEffect } from "react";
import Toggle from "react-toggle";

import "./index.scss";

const CloseIcon: FC<{ setShowSettings: (param: boolean) => void }> = ({
  setShowSettings,
}) => (
  <svg
    onClick={() => setShowSettings(false)}
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.7125 18.2875C20.9003 18.4771 21.0056 18.7332 21.0056 19C21.0056 19.2669 20.9003 19.5229 20.7125 19.7125C20.5214 19.8973 20.2659 20.0007 20 20.0007C19.7341 20.0007 19.4786 19.8973 19.2875 19.7125L11 11.4125L2.71251 19.7125C2.52137 19.8973 2.26589 20.0007 2.00001 20.0007C1.73413 20.0007 1.47865 19.8973 1.28751 19.7125C1.09973 19.5229 0.994385 19.2669 0.994385 19C0.994385 18.7332 1.09973 18.4771 1.28751 18.2875L9.58751 10L1.28751 1.71252C1.12805 1.51823 1.04656 1.27156 1.05889 1.02051C1.07122 0.769459 1.17649 0.531968 1.35422 0.354233C1.53196 0.176499 1.76945 0.0712281 2.0205 0.0588981C2.27155 0.046568 2.51821 0.12806 2.71251 0.287523L11 8.58752L19.2875 0.287523C19.4818 0.12806 19.7285 0.046568 19.9795 0.0588981C20.2306 0.0712281 20.4681 0.176499 20.6458 0.354233C20.8235 0.531968 20.9288 0.769459 20.9411 1.02051C20.9535 1.27156 20.872 1.51823 20.7125 1.71252L12.4125 10L20.7125 18.2875Z"
      fill="#471515"
    />
  </svg>
);

interface SettingsProps {
  setShowSettings: (param: boolean) => void;
  phase: "focus" | "short" | "focus2" | "long";
  darkMode: boolean;
  setDarkMode: (param: boolean) => void;
  focusLength: number;
  setFocusLength: (param: number) => void;
  shortLeangth: number;
  setShortLength: (param: number) => void;
  longLength: number;
  setLongLength: (param: number) => void;
  notifications: boolean;
  setNotifications: (param: boolean) => void;
  toast: any;
}

const Settings: FC<SettingsProps> = ({
  toast,
  setShowSettings,
  phase,
  darkMode,
  setDarkMode,
  focusLength,
  setFocusLength,
  shortLeangth,
  setShortLength,
  longLength,
  setLongLength,
  notifications,
  setNotifications,
}) => {
  return (
    <div className="settings">
      <div id="settings-modal" className={`settings-menu settings-${phase}`}>
        <div className="settings-menu-header">
          <span className="h1">Settings</span>
          <CloseIcon setShowSettings={setShowSettings} />
        </div>
        <div className="settings-menu-controls">
          <div className="settings-menu-controls-item">
            <span className="regular">Dark mode</span>
            <Toggle
              defaultChecked={darkMode}
              onChange={() => {
                setDarkMode(!darkMode);
                toast("Color theme was changed!");
              }}
            />
          </div>
          <div className="settings-menu-controls-item">
            <span className="regular">Focus length</span>
            <input
              type="number"
              value={focusLength}
              onChange={(e) => setFocusLength(+e.target.value)}
              className="regular"
            />
          </div>
          <div className="settings-menu-controls-item">
            <span className="regular">Short break length</span>
            <input
              className="regular"
              type="number"
              value={shortLeangth}
              onChange={(e) => setShortLength(+e.target.value)}
            />
          </div>
          <div className="settings-menu-controls-item">
            <span className="regular">Long break length</span>
            <input
              type="number"
              className="regular"
              value={longLength}
              onChange={(e) => setLongLength(+e.target.value)}
            />
          </div>
          <div className="settings-menu-controls-item">
            <span className="regular">Notifications</span>
            <Toggle
              defaultChecked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

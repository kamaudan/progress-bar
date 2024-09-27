import { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar";

import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [success, setSucess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <>
      <div className="app">
        <span>Progress Bar</span>
        <ProgressBar value={value} onComplete={() => setSucess(true)} />
        <span>{success ? "Complete!" : "Loading..."}</span>
      </div>
    </>
  );
}

export default App;

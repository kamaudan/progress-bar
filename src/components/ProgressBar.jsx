import { useEffect } from "react";
import { useState } from "react";
import { MAX, MIN } from "./constraints";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));
    if (value >= MAX) onComplete();
  }, [value]);

  return (
    <div className="progress">
      <span style={{ color: percent > 49 ? "White" : "Black" }}>
        {percent.toFixed()}%
      </span>
      <div
        style={{ width: `${percent}%` }}
        //style={{transform: `scaleX(${percent / MAX})`,transformOrigin: "left",}}
        className="inside"
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent.toFixed()}
      />
    </div>
  );
};

export default ProgressBar;

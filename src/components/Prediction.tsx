import { useState } from "react";

function Prediction() {
  const [prediction, setPrediction] = useState("");

  const generatePrediction = () => {
    // Simple prediction logic; replace with actual model/API
    const outcomes = ["Success", "Failure", "Try Again", "Good Luck"];
    const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
    setPrediction(randomOutcome);
  };

  return (
    <div>
      <button onClick={generatePrediction}>Generate Prediction</button>
      {prediction && <p>Your Prediction: {prediction}</p>}
    </div>
  );
}

export default Prediction;

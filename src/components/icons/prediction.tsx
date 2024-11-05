import React from "react";

const PredictionIcon = ({ color = "#9A328C", color2 = "#732669" }) => (
  <svg
    width="20"
    height="23"
    viewBox="0 0 20 23"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 19.9972C15.5228 19.9972 20 15.52 20 9.99719C20 4.47434 15.5228 -0.00280762 10 -0.00280762C4.47715 -0.00280762 0 4.47434 0 9.99719C0 15.52 4.47715 19.9972 10 19.9972Z"
      fill={color}
    />
    <path
      d="M16.8162 18.1474C16.8162 18.1474 10.5157 23.9855 3.17488 18.1474L1.44061 23.0028H18.2035L16.8162 18.1474Z"
      fill={color}
    />
    <path
      d="M5.2601 6.73658C5.96251 6.73658 6.53193 6.16716 6.53193 5.46476C6.53193 4.76235 5.96251 4.19293 5.2601 4.19293C4.5577 4.19293 3.98828 4.76235 3.98828 5.46476C3.98828 6.16716 4.5577 6.73658 5.2601 6.73658Z"
      fill={color2}
    />
  </svg>
);

export default PredictionIcon;

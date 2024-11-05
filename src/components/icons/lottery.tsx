import React from "react";

const LotteryIcon = ({ color = "#9A328C", color2 = "#732669" }) => (
  <svg
    width="21"
    height="26"
    viewBox="0 0 21 26"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
  >
    <ellipse cx="10.3334" cy="9.59091" rx="10" ry="9.09091" fill={color} />
    <path
      d="M3.58177 21.3068L9.70837 11.6599L15.835 21.3068H3.58177Z"
      stroke={color2}
    />
    <ellipse
      cx="1.98184"
      cy="1.83796"
      rx="1.98184"
      ry="1.83796"
      transform="matrix(0.955159 -0.296092 0.351198 0.936301 5.33337 3.94635)"
      fill={color2}
    />
    <ellipse
      cx="1.98184"
      cy="1.83796"
      rx="1.98184"
      ry="1.83796"
      transform="matrix(0.955159 -0.296092 0.351198 0.936301 12.8334 7.35544)"
      fill={color2}
    />
    <ellipse
      cx="1.98184"
      cy="1.83796"
      rx="1.98184"
      ry="1.83796"
      transform="matrix(0.955159 -0.296092 0.351198 0.936301 1.33337 10.7645)"
      fill={color2}
    />
  </svg>
);

export default LotteryIcon;

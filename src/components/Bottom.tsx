import React from "react";
import { useNavigate } from "react-router-dom";
import PredictionIcon from "./icons/prediction";
import LotteryIcon from "./icons/lottery";
import LeadershipIcon from "./icons/leadership";
import AccountIcon from "./icons/account";

interface BottomProps {
  activeIndex: number;
}

function Bottom({ activeIndex }: BottomProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row border-solid border-t-[0.5px] border-bluePrimary rounded-full justify-between py-3 px-5 z-10 sticky bottom-0 bg-mainBg">
      <div
        className={`flex flex-col justify-between ${
          activeIndex === 1
            ? "bg-gradient-to-br from-greenPrimary/25 to-greenPrimary/5 rounded-full"
            : ""
        }`}
        onClick={() => navigate("/prediction")}
      >
        <div className="mx-auto">
          <PredictionIcon
            color={activeIndex === 1 ? "#09EAB5" : "#9A328C"}
            color2={activeIndex === 1 ? "#04624C" : "#732669"}
          />
        </div>
        <p
          className={`${
            activeIndex === 1 ? "text-grayPrimary" : "text-pinkBorder"
          } text-xs`}
        >
          Prediction
        </p>
      </div>
      <div
        className={`flex flex-col justify-between ${
          activeIndex === 2
            ? "bg-gradient-to-br from-greenPrimary/25 to-greenPrimary/5 rounded-full"
            : ""
        }`}
        onClick={() => navigate("/lottery")}
      >
        <div className="mx-auto">
          <LotteryIcon
            color={activeIndex === 2 ? "#09EAB5" : "#9A328C"}
            color2={activeIndex === 2 ? "#04624C" : "#732669"}
          />
        </div>
        <p
          className={`${
            activeIndex === 2 ? "text-grayPrimary" : "text-pinkBorder"
          } text-xs`}
        >
          Lottery
        </p>
      </div>
      <div
        className={`flex flex-col justify-between ${
          activeIndex === 3
            ? "bg-gradient-to-br from-greenPrimary/25 to-greenPrimary/5 rounded-full"
            : ""
        }`}
        onClick={() => navigate("/leadership")}
      >
        <div className="mx-auto">
          <LeadershipIcon
            color={activeIndex === 3 ? "#09EAB5" : "#9A328C"}
            color2={activeIndex === 3 ? "#04624C" : "#732669"}
          />
        </div>
        <p
          className={`${
            activeIndex === 3 ? "text-grayPrimary" : "text-pinkBorder"
          } text-xs`}
        >
          Leadership
        </p>
      </div>
      <div
        className={`flex flex-col justify-between ${
          activeIndex === 4
            ? "bg-gradient-to-br from-greenPrimary/25 to-greenPrimary/5 rounded-full"
            : ""
        }`}
        onClick={() => navigate("/account")}
      >
        <div className="mx-auto">
          <AccountIcon color={activeIndex === 4 ? "#09EAB5" : "#9A328C"} />
        </div>
        <p
          className={`${
            activeIndex === 4 ? "text-grayPrimary" : "text-pinkBorder"
          } text-xs`}
        >
          Account
        </p>
      </div>
    </div>
  );
}

export default Bottom;

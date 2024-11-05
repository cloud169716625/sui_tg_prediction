import { useState } from "react";
import Input from "./common/input";
import Bottom from "./Bottom";

function Lottery() {
  const [price, setPrice] = useState<number>(0);
  return (
    <div className="bg-mainBg">
      <div className="flex flex-row pt-4 ml-6">
        <img src="./images/header-logo.svg" alt="logo" className="z-0" />
        <span className="text-[18px] text-white ml-2">Predict Wise</span>
      </div>
      <div className="text-white mt-9 text-[32px] font-bold text-center">
        LOTTERY
      </div>
      <div className="flex flex-row mt-7 justify-center gap-2">
        <div className="text-white rounded-[20px] bg-greenPrimary py-2 px-5 text-xs ">
          Next Draw
        </div>
        <div className="text-white bg-pinkBorder rounded-[20px] py-2 px-3 text-xs">
          #1428 | Draw: 28 Oct 2024, 2:00 AM
        </div>
      </div>
      <div className="mt-6 z-10">
        <img src="./images/lottery-top.svg" alt="lottery" className="mx-auto" />
      </div>
      <div className="rounded-[20px] border-solid border-2 border-bluePrimary bg-opacity-10 bg-pinkBorder mx-7 -mt-2 mb-10 relative z-0 p-5">
        <p className="text-white text-center mt-7">Total Price Pool:</p>
        <p className="text-greenPrimary text-xl font-bold text-center">4200$</p>
        <div className="text- mt-1">
          <Input value={price} handleInput={setPrice} />
        </div>
        <img
          src="./images/lottery-left-coin.svg"
          alt="coin"
          className="absolute top-20 -left-7"
        />
        <p className="text-white text-center mt-3">Total Price Pool:</p>
        <p className="text-greenPrimary text-xl font-bold text-center">0</p>
        <button className="bg-mainBg rounded-3xl py-4 w-full text-white border-solid border-2 border-pinkBorder mt-2 mb-9 active:bg-pinkBorder">
          BUY TICKETS
        </button>
      </div>
      <div className="mx-7 mb-6">
        <button className="w-full text-white bg-greenPrimary rounded-3xl py-4 active:bg-activeGreen">
          FINISHED ROUND
        </button>
      </div>
      <Bottom activeIndex={2} />
    </div>
  );
}

export default Lottery;

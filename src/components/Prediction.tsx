import Bottom from "./Bottom";

function Prediction() {
  return (
    <div className="w-full bg-mainBg">
      <div className="flex flex-row pt-4 ml-6">
        <img src="./images/header-logo.svg" alt="logo" className="z-0" />
        <span className="font-darkGrot text-[18px] text-white">
          Predict Wise
        </span>
      </div>
      <div className="relative flex flex-col mt-9 z-0">
        <p className="font-bold text-3xl text-white uppercase text-center w-full">
          Prediction
        </p>
        <p className="font-medium text-xl text-white text-center w-full mt-12">
          Markets
        </p>
        <img
          src="./images/prediction-img1.svg"
          alt="coin"
          className="absolute w-[154px] h-[154px] top-0 left-[-20px]"
        />
      </div>
      <div className="relative flex flex-col gap-2 mt-3 z-20 px-7">
        <select
          className="rounded-[20px] bg-bluePrimary text-white h-12 px-6"
          defaultValue="Select Market"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="rounded-[20px] bg-bluePrimary text-white h-12 mt-2 flex flex-row p-1 gap-2 mx-7">
        <div className="rounded-[20px] bg-greenPrimary w-1/2 content-evenly">
          <p className="text-center">P/L</p>
        </div>
        <div className="rounded-[20px] border-solid border-2 border-pinkBorder w-1/2 content-evenly">
          <p className="text-center">Timer</p>
        </div>
      </div>
      <div className="rounded-[20px] border-solid border-2 border-bluePrimary bg-opacity-10 bg-pinkBorder mx-2 mt-10 mb-10 relative">
        <div className="absolute -right-2 -top-10">
          <img src="./images/tri-coin.svg" alt="coin" />
        </div>
        <div className="text-center mt-4">
          <div className="flex justify-center">
            <img src="./images/up-triangle.svg" alt="logo" className="z-0" />
          </div>
          <p className="text-white">PAYOUT 2X</p>
        </div>
        <div className="bg-bluePrimary mt-4 mb-3 text-center text-white">
          <p>Total Price Pool:</p>
          <p className="text-greenPrimary text-xl font-bold">4200$</p>
        </div>
        <div className="px-4">
          <button className="bg-buttonBg rounded-3xl w-full py-4 text-white mb-2">
            Enter Up
          </button>
          <button className="bg-buttonBg rounded-3xl w-full py-4 text-white">
            Enter Down
          </button>
        </div>
        <div className="text-center my-4">
          <p className="text-white">PAYOUT 4X</p>
          <div className="flex justify-center">
            <img src="./images/down-triangle.svg" alt="logo" className="z-0" />
          </div>
        </div>
        <div className="absolute -bottom-10 -left-2">
          <img src="./images/multi-coin.svg" alt="coin" />
        </div>
      </div>
      <Bottom activeIndex={1} />
    </div>
  );
}

export default Prediction;

function Prediction() {
  return (
    <div className="max-w-[650px]">
      <div className="flex flex-row">
        <img src="./images/header-logo.svg" alt="" />
        <span className="font-darkGrot text-[18px] text-white">
          Predict Wise
        </span>
      </div>
      <div className="relative flex flex-col mt-9 z-0">
        <p className="font-inter font-bold text-3xl text-white uppercase text-center w-full">
          Prediction
        </p>
        <p className="font-inter font-medium text-xl text-white text-center w-full mt-12">
          Markets
        </p>
        <img
          src="./images/prediction-img1.svg"
          alt=""
          className="absolute w-[154px] h-[154px] top-0 left-[-20px]"
        />
      </div>
      <div className="relative flex flex-col gap-2 mt-6 z-20">
        <select className="rounded-[20px] bg-bluePrimary text-white h-12 px-6">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </div>
  );
}

export default Prediction;

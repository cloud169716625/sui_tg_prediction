import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handlePrediction = () => {
    navigate("/prediction");
  };
  console.log("test");
  return (
    <div className="max-w-[650px] bg-homebackground py-20 px-5">
      <div className="flex flex-row">
        <img src="./images/main-logo.svg" alt="" />
        <span className="font-darkGrot text-3xl text-white">Predict Wise</span>
      </div>
      <p className="font-darkGrot text-[48px] font-bold uppercase text-white leading-[45px] mt-9">
        Predict, Win, and Earn Crypto!
      </p>
      <p className="mt-2 font-darkGrot uppercase text-sm font-medium text-bluePrimary">
        Join live predictions and lotteries for exciting crypto rewards.
      </p>
      <div className="flex items-center justify-center mt-12">
        <div className="relative w-[400px] h-[400px]">
          <img src="./images/main-img1.png" alt="" />
          <img
            src="./images/main-img2.svg"
            alt=""
            className="absolute top-[-25px] right-0"
          />
        </div>
      </div>
      <p
        className="mt-3 font-darkGrot uppercase text-sm text-grayPrimary font-medium text-center cursor-pointer"
        onClick={handlePrediction}
      >
        Get Started on Telegram
      </p>
    </div>
  );
}

export default Home;

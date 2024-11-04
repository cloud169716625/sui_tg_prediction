function Bottom() {
  return (
    <div className="flex flex-row border-solid border-t-[0.5px] border-bluePrimary rounded-full justify-between py-3 px-5">
      <div className="flex flex-col justify-between">
        <img
          src="./images/prediction.svg"
          alt="prediction"
          className="mx-auto"
        />
        <p className="text-pinkBorder text-xs">Prediction</p>
      </div>
      <div className="flex flex-col justify-between">
        <img src="./images/lottery.svg" alt="lottery" className="mx-auto" />
        <p className="text-pinkBorder text-xs">Lottery</p>
      </div>
      <div className="flex flex-col justify-between">
        <img
          src="./images/leadership.svg"
          alt="leadership"
          className="mx-auto"
        />
        <p className="text-pinkBorder text-xs">Leadership</p>
      </div>
      <div className="flex flex-col justify-between text-center">
        <div>
          <img src="./images/account.svg" alt="account" className="mx-auto" />
        </div>
        <p className="text-pinkBorder text-xs">Account</p>
      </div>
    </div>
  );
}

export default Bottom;

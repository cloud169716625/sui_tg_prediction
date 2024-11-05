interface InputProps {
  handleInput: (value: number) => void;
  value: number | undefined;
}

function Input({ handleInput, value }: InputProps) {
  return (
    <>
      <input
        className="rounded-3xl py-3 px-5 bg-bluePrimary w-full text-white outline-none"
        placeholder="Input Price"
        value={value}
        onChange={(e) => handleInput(Number(e.target.value))}
      />
    </>
  );
}

export default Input;

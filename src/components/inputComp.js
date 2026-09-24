function InputComp({ input, onChange }) {
  return (
    <>
      <input onChange={onChange} value={input} placeholder="print TO DO" />
    </>
  );
}

export default InputComp;

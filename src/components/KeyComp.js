import { useEffect } from "react";
function KeyComp({ onClickHandler }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Enter") {
        onClickHandler();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClickHandler]);

  return (
    <>
      <button
        onClick={onClickHandler}
        style={{ width: "100px", height: "25px", margin: "10px" }}
      >
        Add TO DO
      </button>
    </>
  );
}

export default KeyComp;

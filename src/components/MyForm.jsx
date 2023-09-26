import { useState } from "react";

export const MyForm = () => {
  const [mood, setMood] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setMood(value);
    setValue("");
  };

  return (
    <>
      <form>
        <label>What be ye mood today?</label>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button type="button" onClick={handleClick}>
          Hold yonder mood
        </button>
      </form>

      <p>My mood is: {mood}</p>
    </>
  );
};

import React from "react";

const Button = ({ handleSubmit, value, handleQuit, next, quitz }) => {
  return (
    <div className="w-full">
      <button
        className={`w-full h-11 ${next} ${quitz} text-white font-ubuntu font-bold rounded-md`}
        type="button"
        onClick={handleSubmit || handleQuit}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;

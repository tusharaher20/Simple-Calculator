import React, { useImperativeHandle, useState } from "react";

function Calculator() {
  const [result, setresult] = useState("");

  const clickHandle = (e) => {
    setresult(result.concat(e.target.value));
  };

  const clearScreen = () => {
    setresult("");
  };

  const calculate = () => {
    setresult(eval(result).toString());
  };

  return (
    <div className="bg-gray-800 text-white w-screen h-screen flex justify-center items-center">
      <div className="main w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100">
        {/* Screen STarts here oh yeah */}
        <div className="screen p-2">
          <input
            value={result}
            type="text"
            className="text-black w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder:black px-1 bg-gray-100 text-right text-2xl pt-10"
            placeholder="0"
          />
        </div>

        <div className="brand flex justify-center mb-2 shadow-md text-gray-500 bg-gray-200 bg-opacity-90">
          <h1 className="text-gray-900 text-xs font-bold ">tusharaher20</h1>
        </div>

        {/* Keybard starts here fellas */}
        <div className="keyboard">
          <div className="flex justify-between m-2">
            <input
              type="button"
              onClick={clearScreen}
              value="C"
              className="bg-red-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              onClick={clickHandle}
              value="<"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              onClick={clickHandle}
              value="%"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              onClick={clickHandle}
              value="/"
              className="bg-pink-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
          </div>
        </div>

        <div className="flex justify-between m-2">
          <input
            type="button"
            value="7"
            onClick={clickHandle}
            className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
          <input
            type="button"
            onClick={clickHandle}
            value="8"
            className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
          <input
            type="button"
            onClick={clickHandle}
            value="9"
            className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
          <input
            type="button"
            onClick={clickHandle}
            value="*"
            className="bg-green-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
        </div>

        <div className="flex justify-between m-2">
          <input
            type="button"
            onClick={clickHandle}
            value="4"
            className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
          <input
            type="button"
            onClick={clickHandle}
            value="5"
            className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
          <input
            type="button"
            onClick={clickHandle}
            value="6"
            className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
          <input
            type="button"
            onClick={clickHandle}
            value="-"
            className="bg-indigo-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
        </div>

        <div className="flex justify-between m-2">
          <input
            type="button"
            onClick={clickHandle}
            value="1"
            className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
          <input
            type="button"
            onClick={clickHandle}
            value="2"
            className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
          <input
            type="button"
            onClick={clickHandle}
            value="3"
            className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
          <input
            type="button"
            onClick={clickHandle}
            value="+"
            className="bg-purple-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
        </div>

        <div className="flex justify-between m-2">
          <input
            type="button"
            onClick={clickHandle}
            value="0"
            className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
          <input
            type="button"
            onClick={clickHandle}
            value="00"
            className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
          <input
            type="button"
            onClick={clickHandle}
            value="."
            className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
          <input
            type="button"
            onClick={calculate}
            value="="
            className="bg-orange-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Calculator;

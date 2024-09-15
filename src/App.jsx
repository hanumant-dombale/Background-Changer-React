import { useState } from "react";

function App() {
  const [colour, setColour] = useState("cyan");

  return (
    <div
      className="w-[100%] h-screen flex items-start justify-center"
      style={{ backgroundColor: colour }}
    >
      <div className="flex flex-wrap items-center justify-center p-4 rounded-2xl bg-slate-300 m-5 gap-5 border-2 border-black">
        <button
          className="p-4 bg-red-600 text-white text-3xl rounded-2xl border-2 border-black"
          onClick={() => {
            setColour("red");
          }}
        >
          Red
        </button>
        <button
          className="p-4 bg-blue-600 text-white text-3xl rounded-2xl border-2 border-black"
          onClick={() => {
            setColour("blue");
          }}
        >
          Blue
        </button>
        <button
          className="p-4 bg-green-600 text-white text-3xl rounded-2xl border-2 border-black"
          onClick={() => {
            setColour("green");
          }}
        >
          Green
        </button>
        <button
          className="p-4 bg-pink-600 text-white text-3xl rounded-2xl border-2 border-black"
          onClick={() => {
            setColour("pink");
          }}
        >
          Pink
        </button>
        <button
          className="p-4 bg-white text-black text-3xl rounded-2xl border-2 border-black"
          onClick={() => {
            setColour("white");
          }}
        >
          White
        </button>
        <button
          className="p-4 bg-orange-600 text-white text-3xl rounded-2xl border-2 border-black"
          onClick={() => {
            setColour("orange");
          }}
        >
          Orange
        </button>
        <button
          className="p-4 bg-yellow-400 text-white text-3xl rounded-2xl border-2 border-black"
          onClick={() => {
            setColour("yellow");
          }}
        >
          Yellow
        </button>
        <button
          className="p-4 bg-purple-600 text-white text-3xl rounded-2xl border-2 border-black"
          onClick={() => {
            setColour("purple");
          }}
        >
          Purple
        </button>
      </div>
    </div>
  );
}

export default App;

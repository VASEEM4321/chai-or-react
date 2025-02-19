import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("olive");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-2xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none text-white font-bold px-4 py-2 bg-red-500 rounded-lg"
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none text-white font-bold px-4 py-2 bg-green-500 rounded-lg"
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none text-white font-bold px-4 py-2 bg-blue-500 rounded-lg"
          >
            Blue
          </button>

          <button
            onClick={() => setColor("gray")}
            className="outline-none text-white font-bold px-4 py-2 bg-gray-500 rounded-lg"
          >
            Gray
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none text-white font-bold px-4 py-2 bg-yellow-500 rounded-lg"
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("brown")}
            className="outline-none text-black font-bold px-4 py-2 bg-brown-500 rounded-lg"
          >
            Brown
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none text-white font-bold px-4 py-2 bg-purple-500 rounded-lg"
          >
            purple
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none text-white font-bold px-4 py-2 bg-orange-500 rounded-lg"
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

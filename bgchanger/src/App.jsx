import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-900"
      style={{ backgroundColor: color }}
    >
    <h1 className="text-center pt-80 text-2xl text-white uppercase font-bold animate-bounce ">{color}</h1>
      <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl border-solid border-2" style={{backgroundColor: color}}>
          <button
          onClick={() => setColor("red")}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
          onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
          onClick={() => setColor("green")}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
          onClick={() => setColor("Indigo")}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "Indigo" }}
          >
            
Indigo
          </button>
          <button
          onClick={() => setColor("blue")}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
          onClick={() => setColor("Teal")}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "Teal" }}
          >
            Teal
          </button>
          <button
          onClick={() => setColor("Crimson")}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "Crimson" }}
          >
            Crimson
          </button>
          <button
          onClick={() => setColor("Magenta")}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "Magenta" }}
          >
            Magenta
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

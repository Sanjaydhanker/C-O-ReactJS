import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive ");

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bg-white px-3 rounded-full bottom-12">
        <div className="flex flex-wrap gap-3 px-3 py-2 shadow-2xl rounded-full">
          <button
            onClick={()=> setColor("red")}
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
          onClick={()=> setColor("black")}
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
          onClick={()=> setColor("violet")}
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
          onClick={()=> setColor("orange")}
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
          onClick={()=> setColor("green")}
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
          onClick={()=> setColor("blue")}
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
          onClick={()=> setColor("indigo")}
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "indigo" }}
          >
            Indigo
          </button>
          <button
          onClick={()=> setColor("aqua")}
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "aqua" }}
          >
            Aqua
          </button>
          <button
          onClick={()=> setColor("gray")}
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
          onClick={()=> setColor("yellow")}
            className="outline-none px-4 py-1 rounded-2xl text-white "
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

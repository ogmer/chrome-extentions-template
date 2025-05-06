import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="w-[400px] h-[500px] p-4 bg-white">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold mb-4">Chrome Extension Template</h1>
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">Count: {count}</p>
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useRef, useState } from "react";
import Tasks from "./Tasks";

function App() {
  const inputText = useRef();
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const newTask = inputText.current.value.trim();
    if (newTask) {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      inputText.current.value = "";
    }
  };

  return (
    <div className="w-[100%] min-h-[100vh] bg-violet-600 pt-[100px]">
      <div className="w-fit bg-slate-800 mx-auto pt-[10px] pb-[20px] px-[30px] rounded-[5px]">
        <h2 className="text-white w-fit mx-auto text-[1.5rem]">
          Get Things Done!
        </h2>
        <div className="flex h-[2.2rem] my-[30px]">
          <input
            type="text"
            placeholder="What is the task today?"
            className="border-violet-400 border w-[250px] bg-slate-800 px-1 focus:outline-none caret-white text-white"
            ref={inputText}
          />
          <button
            className="text-white bg-violet-500 px-[12px]"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;

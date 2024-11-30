import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";

function Tasks({ tasks, setTasks }) {
  const [editIndex, setEditIndex] = useState(null);
  const [tempTask, setTempTask] = useState("");

  const deleteTask = (taskToDelete) => {
    const newTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(newTasks);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setTempTask(tasks[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedTasks = tasks.map(
      (task, i) => (i === index ? tempTask : task)
    );
    setTasks(updatedTasks);
    setEditIndex(null);
  };

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task, index) => (
        <div
          className="flex justify-between items-center bg-violet-500 p-[10px] rounded mb-2"
          key={index}
        >
          {editIndex === index ? (
            <input
              type="text"
              className="text-black px-2 p-1 focus:outline-1"
              value={tempTask}
              onChange={(e) => setTempTask(e.target.value)}
            />
          ) : (
            <div className="text-white px-4 p-1">{task}</div>
          )}

          <div className="flex gap-2">
            {editIndex === index ? (
              <button onClick={() => handleSaveEdit(index)}>
                <TiTick className="text-white text-[20px]" />
              </button>
            ) : (
              <button onClick={() => handleEditClick(index)}>
                <FaEdit className="text-white" />
              </button>
            )}
            <button onClick={() => deleteTask(task)}>
              <MdDelete className="text-white" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasks;

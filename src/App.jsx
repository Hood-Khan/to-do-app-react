import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const addData = () => {
    if (inputValue.trim() === "") return;
    if (edit) {
      console.log("updatingItem");
      const newList = [...list];
      newList[currentIndex] = inputValue;
      setList(newList);
      setEdit(false);
      setCurrentIndex(null);
    } else {
      setList([...list, inputValue]);
    }
    // clear input field
    setInputValue("");
  };

  const deleteItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const updateItem = (index) => {
    console.log("updateItem");
    setInputValue(list[index]);

    setEdit(true);
    setCurrentIndex(index);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">📝 Todo List</h1>

      <div className="flex mb-4 w-full max-w-md">
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          placeholder="Enter item"
          className="flex-1 border p-2 rounded-l-md focus:outline-none"
        />
        <button
          onClick={addData}
          className={`${
            edit
              ? "bg-amber-500 hover:bg-amber-600"
              : "bg-green-700 hover:bg-green-800"
          } text-white border border-black px-4 py-2 rounded-r-md transition`}
        >
          {edit ? "Update" : "Add"}
        </button>
      </div>

      <ul className="w-full max-w-md space-y-3">
        {list.map((data, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white shadow-md p-3 rounded-lg"
          >
            <span className="text-gray-800">{data}</span>

            <div className="flex space-x-2">
              <button
                onClick={() => updateItem(index)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                Edit
              </button>

              <button
                onClick={() => deleteItem(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

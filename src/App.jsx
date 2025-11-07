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
      const newList = [...list];
      newList[currentIndex] = inputValue;
      setList(newList);
      setEdit(false);
      setCurrentIndex(null);
    } else {
      setList([...list, inputValue]);
    }
    setInputValue("");
  };

  const deleteItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const updateItem = (index) => {
    setInputValue(list[index]);
    setEdit(true);
    setCurrentIndex(index);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-300 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          📝 Todo List
        </h1>

        <div className="flex mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={handleInput}
            placeholder="Enter item"
            className="flex-1 border border-gray-500 p-3 rounded-l-lg focus:outline-none focus:border-green-500"
          />
          <button
            onClick={addData}
            className={`${
              edit
                ? "bg-amber-500 hover:bg-amber-600"
                : "bg-green-700 hover:bg-green-800"
            } text-white px-5 py-3 rounded-r-lg font-semibold transition`}
          >
            {edit ? "Update" : "Add"}
          </button>
        </div>

        <ul className="space-y-4">
          {list.map((data, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <span className="text-gray-800 font-medium">{data}</span>

              <div className="flex space-x-2">
                <button
                  onClick={() => updateItem(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition font-medium"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteItem(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition font-medium"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

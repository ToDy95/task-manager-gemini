import React, { useState, useEffect } from "react";
import "./App.css";
import TaskViewer from "./Components/TaskViewer";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [inputValue, setInputValue] = useState("")
  const fetchData = async () => {
    const response = await fetch('./firstData.json');
    const res = await response.json();
    setData(res)
  }
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    setFilteredData(data.filter(find => find.message.toLowerCase().includes(inputValue.toLowerCase())))
    console.log(data)
  },[inputValue])


  return (
    <div className="App">
      <input type="search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <TaskViewer data={filteredData.length>0 ? filteredData: data} setData={setData} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import TaskViewer from "./Components/TaskViewer";
import Search from "./Components/Search";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const fetchData = async () => {
    const response = await fetch('./data.json');
    const res = await response.json();
    setData(res)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const searchData = (filterData) => {
    setFilteredData(filterData)
  }

  return (
    <div className="App">
      <Search data={data} searchData={searchData}/>
      <TaskViewer data={filteredData.length>0 ? filteredData: data} setData={setData} />
    </div>
  );
}

export default App;

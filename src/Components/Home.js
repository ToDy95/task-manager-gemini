import React, { useState, useEffect } from "react";
import TaskViewer from "./TaskViewer";
import Search from "./Search";

const Home = () => {
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
  const trimitData = (a) => {

  }
  return (
    <div className="App" >
      <Search data={data} searchData={searchData} />
      <TaskViewer data={filteredData.length > 0 ? filteredData : data} setData={setData} />
    </div>
  );
}

export default Home

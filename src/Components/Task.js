import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'

const Task = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${__dirname}data.json`);
        const res = await response.json();
        if(response.ok)
        setData(res.filter(item => item.id === id));

    } catch (err) {
      console.error('Error while fetching data:', err);
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} style={{display:'flex', flexDirection:"column", justifyContent:'center', textAlign:'center', alignItems:'center', width:'100%', gap:20}}>
          <div >{item.title}</div>
          <div>{item.details}</div>
        </div>
        )
      })}


      </>
  )
}

export default Task

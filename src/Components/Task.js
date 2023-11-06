import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'

const Task = () => {
  const {id} = useParams();
  const [data, setData] = useState([
    {
      "id": "1",
      "message": "Createa a Card",
      "status": "In progress",
      "title": "Bla bla bla1",
      "dueDate": "12 24, 22",
      "details": "What is Lorem Ipsum?  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      "id": "2",
      "message": "Createa a dashboard",
      "status": "In progress",
      "title": "Bla bla bla2",
      "dueDate": "12 24, 22",
      "details": "What is Lorem Ipsum?  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      "id": "3",
      "message": "Createa a view for our Cards List",
      "status": "Done",
      "title": "Bla bla bla3",
      "dueDate": "12 24, 22",
      "details": "What is Lorem Ipsum?  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      "id": "4",
      "message": "Make a filter",
      "status": "To be assigned",
      "title": "Bla bla bla4",
      "dueDate": "12 24, 22",
      "details": "What is Lorem Ipsum?  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      "id": "5",
      "message": "Create a component Create New Task",
      "status": "In progress",
      "title": "Bla bla bla5",
      "dueDate": "09 14, 22",
      "details": "What is Lorem Ipsum?  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      "id": "6",
      "message": "Put all together",
      "status": "In progress",
      "title": "Bla bla bla6",
      "dueDate": "12 24, 22",
      "details": "What is Lorem Ipsum?  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]

  );

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('./data.json');
  //     if (response.ok) {
  //       const res = await response.json();
  //       setData(res.filter(item => item.id === id));
  //     } else {
  //       console.error('Failed to fetch data: ' + response.status);
  //     }
  //   } catch (err) {
  //     console.error('Error while fetching data:', err);
  //   }
  // }



  useEffect(() => {
    // fetchData()

    setData(data.filter(item =>item.id == id ))
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

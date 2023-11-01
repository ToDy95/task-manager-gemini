import React from "react";
import Card from "./Card";
import styles from "./TaskViewer.module.css";
import ModalComponent from "./Modal";

const TaskViewer = ({ data, setData }) => {

  const taskData  = (newTask) => {
    // console.log(newTask, "din task viewer")
    setData(prev => [
      ...prev,
      newTask
    ])


  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Task Manager</div>
      <div>
        <ModalComponent  taskData={taskData}/>
      </div>
      <div className={styles.content}>
        {data.map((item) => {
          console.log(item);
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
};

export default TaskViewer;

import React from "react";
import Card from "./Card";
import styles from "./TaskViewer.module.css";
import ModalComponent from "./Modal";

const TaskViewer = ({ data, setData }) => {
  const [check, setCheck] = React.useState([])
  const [filteredData, setFilteredData] = React.useState([])
  // setFilteredData(data.filter(item => !check.includes(item.id)));
  const taskData = (newTask) => {
    // console.log(newTask, "din task viewer")
    setData(prev => [
      ...prev,
      newTask
    ])


  }

  const checkedListFn = (item) => {
    setCheck(prev => [...prev, item])


  }

  React.useEffect(() => {
    // Aici filtrăm data folosind check și apoi actualizăm state-ul cu rezultatul filtrării.
    setData(filteredData);
    setFilteredData(data.filter(item => !check.includes(item.id)));

  }, [check]);


  return (
    <div className={styles.container}>
      <div className={styles.title}>Task Manager</div>
      <div>
        <ModalComponent taskData={taskData} />
      </div>
      <div className={styles.content}>
        {filteredData.length > 0 ? filteredData.map((item, index) => {

          return <Card item={item} key={index} checkedListFn={checkedListFn} />;
        }) : data.map((item, index) => {

          return <Card item={item} key={index} checkedListFn={checkedListFn} />;
        })}
      </div>
    </div>
  );
};

export default TaskViewer;

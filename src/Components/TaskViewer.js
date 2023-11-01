import React from "react";
import Card from "./Card";
import styles from "./TaskViewer.module.css";
import ModalComponent from "./Modal";

const TastViewer = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Task Manager</div>
      <div>
        <ModalComponent />
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

export default TastViewer;

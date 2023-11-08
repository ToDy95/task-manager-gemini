import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Card = ({ item, checkedListFn }) => {
  const navigate = useNavigate()





  return (
    // <Link to={'task/'+item.id}>
    //
    <div className={styles.card} >
      <div className={styles.firstLine}>
        <div className={styles.taskId}>T - {item.id}</div>
        <div>
          <input type="checkbox" onChange={() => checkedListFn(item.id)} />
        </div>
        <div className={styles.toDo}>{item.status}</div>
      </div>
      <div className={styles.secondLine}>{item.message}</div>
      <div className={styles.thirdLine}>
        <div className={styles.dueDate}>Due Date</div>
        <div className={styles.date}>
          {new Date(item.dueDate).toLocaleDateString("ro-RO")}
        </div>
      </div>
      <div onClick={() => navigate('task/' + item.id)} style={{ fontSize: 14, display: 'flex', justifyContent: 'center', alignItems: 'center', border: 1, borderColor: 'black', borderStyle: 'solid', padding: 5 }}>View Details</div>
    </div>
    // </Link>
  );
};

export default Card;

import React, {useState} from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding:40,
    display:'flex',
    flexDirection:'column',
    gap:30
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const ModalComponent = ({taskData}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [taskId, SetTaskId] = useState("")
  const [taskStatus, SetTaskStatus] = useState("")
  const [taskMessage, SetTaskMessage] = useState("")
  const [taskDate, SetTaskDate] = useState("")
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const saveMyData = (event) => {
    event.preventDefault()
    const newTask = {
      id:taskId,
      status: taskStatus,
      message:taskMessage,
      dueDate:new Date(taskDate)
    }
    taskData(newTask)
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <button onClick={closeModal}>close</button>
      <div style={{display:'flex',flexDirection:'column',gap:30}}>
      <input type="text" name="taskId" placeholder="T-#" onChange={(e) => SetTaskId(e.target.value)} />
      <input type="text" name="taskStatus" placeholder="Status" onChange={(e) => SetTaskStatus(e.target.value)}/>
      <input type="text" name="taskMessage" placeholder="Message" onChange={(e) => SetTaskMessage(e.target.value)}/>
      <input type="date" name="taskDate" onChange={(e) => SetTaskDate(e.target.value)} />


      <button onClick={saveMyData}>SAVE</button>
      </div>

      </Modal>
    </div>
  );
};

export default ModalComponent;

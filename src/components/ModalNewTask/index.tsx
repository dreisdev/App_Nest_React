import { useState } from "react";
import CloseIcon from "../../assets/close.svg";
import styles from "./styles.module.scss";
import { useAppDispatch } from "../../app/hooks";
import { addNewTask } from "../../features/tasks";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

function ModalNewTask({ open, handleClose }: IProps) {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState("");

  function handleAdd() {
    if (!input) return;
    dispatch(addNewTask(input));
    setInput("");
    handleClose();
  }

  return (
    <>
      {open && (
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <img
              src={CloseIcon}
              alt="close"
              className={styles["close-icon"]}
              onClick={handleClose}
            />

            <h1>Nova Tarefa</h1>
            <div>
              <input
                type="text"
                placeholder="Nova tarefa"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && handleAdd()}
              />
              <button className="btn-pink" onClick={handleAdd}>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalNewTask;

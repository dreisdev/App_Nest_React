import { useState } from "react";
import EmptyIcon from "../../assets/empty.svg";
import Header from "../../components/Header";
import ModalNewTask from "../../components/ModalNewTask";
import TaskCard from "../../components/TaskCard";
import styles from "./styles.module.scss";
import { useAppSelector } from "../../app/hooks";
import { selectTasks } from "../../features/tasks";

function Main() {
  const { tasks } = useAppSelector(selectTasks);

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Header handleOpenModal={() => setOpen(true)} />

      <div className={styles.tasks}>
        {!tasks.length && (
          <div className={styles.empty}>
            <img src={EmptyIcon} alt="empty" />
            <strong>Você ainda não cadastrou tarefas</strong>
          </div>
        )}

        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <ModalNewTask open={open} handleClose={() => setOpen(false)} />
    </div>
  );
}

export default Main;

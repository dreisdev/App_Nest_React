import { useEffect, useState } from "react";
import EmptyIcon from "../../assets/empty.svg";
import Header from "../../components/Header";
import ModalNewTask from "../../components/ModalNewTask";
import TaskCard from "../../components/TaskCard";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectTasks, fetchTasks } from "../../features/tasks";

function Main() {
  // const taskFromRedux = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector(selectTasks);

  // const [tasks, setTasks] = useState<TaskType[]>(taskFromRedux.tasks);

  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   setTasks(taskFromRedux.tasks);
  //   console.log("Tarefas atualizadas:", taskFromRedux.tasks);

  // }, [taskFromRedux]);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

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

import { useDispatch } from "react-redux";
import TrashIcon from "../../assets/trash.svg";
import { TaskType } from "../../types/TaskType";
import styles from "./styles.module.scss";
import { useAppDispatch } from "../../app/hooks";
import { changeTaskStatus, removeTask } from "../../features/tasks";

interface IProps {
  task: TaskType;
}

function TaskCard({ task }: IProps) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <div>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch(changeTaskStatus(task.id))}
        />
        <span className={styles[`${task.done ? "done" : ""}`]}>
          {task.name}
        </span>
      </div>
      <button onClick={() => dispatch(removeTask(task.id))}>
        <img src={TrashIcon} alt="trash" />
      </button>
    </div>
  );
}

export default TaskCard;

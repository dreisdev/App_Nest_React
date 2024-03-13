import { useEffect, useState } from "react";
import { TaskType } from "../../types/TaskType";
import styles from "./styles.module.scss";
import api from "../../services/api/Axios-Instance";

function TaskDetails({ taskId }: { taskId: string }) {
  const [task, setTask] = useState<TaskType | null>(null);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await api.get(`/todolist/detail/${taskId}`);
        setTask(response.data);
        console.log(response.data);
        console.log(taskId);
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };

    fetchTaskDetails();
  }, [taskId]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div>
        <span className={styles[`${task.done ? "done" : ""}`]}>
          {task.name}
        </span>

        <span className={styles[`${task.done ? "done" : ""}`]}>
          {task.description}
        </span>
      </div>
    </div>
  );
}

export default TaskDetails;

import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import TaskDetails from "./components/TaskDetail";
import { TaskType } from "./types/TaskType";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/taskDetail" element={<TaskDetails taskId="" />} />
    </Routes>
  );
}

export default MainRoutes;

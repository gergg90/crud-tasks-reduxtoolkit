import { createTask, deleteTask, TaskId } from "@/features/tasks/tasksSlice";
import { useAppDispatch } from "./useApp";

export const useTasksActions = () => {
  const dispatch = useAppDispatch();

  const createTaskFromHook = ({ title, description, author, checked }) => {
    dispatch(createTask({ title, description, author, checked }));
  };

  const deleteTaskFromHook = (id: TaskId) => {
    dispatch(deleteTask(id));
  };

  return { createTaskFromHook, deleteTaskFromHook };
};

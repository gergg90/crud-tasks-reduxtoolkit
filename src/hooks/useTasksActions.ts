import {
  createTask,
  deleteTask,
  TaskId,
  Tasks,
  updateTask,
} from "@/features/tasks/tasksSlice";
import { useAppDispatch } from "./useApp";

export const useTasksActions = () => {
  const dispatch = useAppDispatch();

  const createTaskFromHook = ({
    title,
    description,
    author,
    checked,
  }: Tasks) => {
    dispatch(createTask({ title, description, author, checked }));
  };

  const deleteTaskFromHook = (id: TaskId) => {
    dispatch(deleteTask(id));
  };

  const updateTaskFromHook = ({
    id,
    title,
    description,
    author,
    checked,
  }: Tasks) => {
    dispatch(updateTask({ id, title, description, author, checked }));
  };

  return { createTaskFromHook, deleteTaskFromHook, updateTaskFromHook };
};

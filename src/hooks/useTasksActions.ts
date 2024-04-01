import { createTask } from "@/features/tasks/tasksSlice";
import { useAppDispatch } from "./useApp";

export const useTasksActions = () => {
  const dispatch = useAppDispatch();

  const createTaskFromHook = ({ title, description, author, checked }) => {
    dispatch(createTask({ title, description, author, checked }));
  };

  return { createTaskFromHook };
};

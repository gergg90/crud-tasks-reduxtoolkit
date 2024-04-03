import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TaskId = string;

export interface Tasks {
  title: string;
  description: string;
  checked: boolean;
  author: string;
}

export interface TasksWithId extends Tasks {
  id: TaskId;
}

const DEFAULT_STATE: Tasks[] = [];

const initialState = (() => {
  const taskStorage = window.localStorage.getItem("tasks");
  return taskStorage ? JSON.parse(taskStorage).tasks : DEFAULT_STATE;
})();

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Tasks>) => {
      const id = crypto.randomUUID();
      const newTask = [...state, { id, ...action.payload }];
      return newTask;
    },
    deleteTask: (state, action: PayloadAction<TaskId>) => {
      return state.filter((state) => state.id !== action.payload);
    },
  },
});

export const { createTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;

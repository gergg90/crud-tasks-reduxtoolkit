import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TaskId = string;

export interface Tasks {
  id: TaskId;
  title: string;
  description: string;
  checked: boolean;
  author: string;
}

// export interface TasksWithId extends Tasks {
//   id: TaskId;
// }

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
    updateTask: (state, action: PayloadAction<Tasks>) => {
      const taskToUpdateIndex = state.findIndex(
        (state) => state.id === action.payload.id
      );

      if (taskToUpdateIndex !== -1) {
        state[taskToUpdateIndex] = {
          ...state[taskToUpdateIndex],
          ...action.payload,
        };
      }
    },
  },
});

export const { createTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;

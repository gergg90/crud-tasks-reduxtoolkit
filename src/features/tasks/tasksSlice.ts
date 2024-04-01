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

// const DEFAULT_STATE: Tasks[] = [];

// const initialState = (() => {
//   const taskStorage = window.localStorage.getItem("tasks");
//   return taskStorage ? JSON.parse(taskStorage).tasks : DEFAULT_STATE;
// })();

const initialState: Tasks[] = [
  // {
  //   id: "1",
  //   title: "titulo1",
  //   description: "Este es mi primera tarea",
  //   checked: true,
  //   author: "Germain Gutierez",
  // },
  // {
  //   id: "12",
  //   title: "IMPORTANTE TAREA A CUNPLIR",
  //   description: "Hacerle unos masajes eroticos a ger en choroni.",
  //   checked: false,
  //   author: "Jesysbeth Moreno",
  // },
];

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

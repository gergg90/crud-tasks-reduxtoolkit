import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Tasks {
  id: string;
  title: string;
  description: string;
  checked: boolean;
  author: string;
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
  },
});

export const { createTask } = tasksSlice.actions;
export default tasksSlice.reducer;

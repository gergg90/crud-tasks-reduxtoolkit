import { createSlice } from "@reduxjs/toolkit";

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
  {
    id: "1",
    title: "titulo1",
    description: "Este es mi primera tarea",
    checked: true,
    author: "Germain Gutierez",
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default tasksSlice.reducer;

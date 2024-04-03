import tasksSlice from "@/features/tasks/tasksSlice";
import { configureStore, type Middleware } from "@reduxjs/toolkit";

const dataBaseMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);

  window.localStorage.setItem("tasks", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(dataBaseMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

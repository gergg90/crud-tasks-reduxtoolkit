import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { ModeToggle } from "./components/ModeToogle";
import { NavBar } from "./components/NavBar";
import NotFound from "./components/NotFound";
import TasksForm from "./components/TasksForm";
import TasksList from "./components/TasksList";
import { ThemeProvider } from "./components/ThemeProvider";

// TODO
//! Complete Edit Task
//! Complete logalstorage

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="h-screen bg-background text-foreground">
          <div className="flex flex-col py-3 px-3">
            <div className="flex justify-evenly pt-6">
              <NavBar />
              <ModeToggle />
            </div>
            <div className="container mx-auto gap-3 pt-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<TasksList />} />
                <Route path="/create/task" element={<TasksForm />} />
                <Route path="/edit/task/:id" element={<TasksForm />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

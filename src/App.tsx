import { ModeToggle } from "./components/ModeToogle";
import TasksForm from "./components/TasksForm";
import TasksList from "./components/TasksList";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/ui/Header";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen bg-background text-foreground">
        <div className="flex flex-col py-3 px-3">
          <div className="flex justify-end">
            <ModeToggle />
          </div>
          <div className="container mx-auto">
            <Header />
            <TasksList />
            <TasksForm />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

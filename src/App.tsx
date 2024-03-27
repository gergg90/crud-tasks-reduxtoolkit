import { ModeToggle } from "./components/ModeToogle";
import TasksList from "./components/TasksList";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen bg-background text-foreground">
        <div className="flex flex-col py-3 px-3">
          <div className="flex justify-end">
            <ModeToggle />
          </div>
          <div className="container mx-auto">
            <TasksList />
            <h1>TaskForm</h1>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

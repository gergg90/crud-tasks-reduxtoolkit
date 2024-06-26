import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DeleteIcon,
  EditIcon,
  TasksCompleteIcon,
  TasksIcon,
  TasksPendingIcon,
} from "./icons";

import { Tasks } from "@/features/tasks/tasksSlice";
import { useAppSelector } from "@/hooks/useApp";
import { useTasksActions } from "@/hooks/useTasksActions";
import { Link } from "react-router-dom";

function TasksList() {
  const tasks = useAppSelector((state) => state.tasks);
  const { deleteTaskFromHook } = useTasksActions();

  return (
    <div>
      <div className="py-6">
        <blockquote className="text-2xl font-semibold italic text-center">
          Task
          <span className="mx-0.5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-rose-600 relative inline-block">
            <span className="relative text-slate-950">
              {" "}
              <div className="flex  px-2 gap-1"> list </div>{" "}
            </span>
          </span>
        </blockquote>
      </div>
      <Table className="mb-16">
        <hr />
        <TableCaption>A list of your recent tasks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Checked</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task: Tasks) => {
            const checkStatusTask = task.checked;

            return (
              <TableRow key={task.id}>
                <TableCell className="font-small">{task.id}</TableCell>
                <TableCell className="font-medium">{task.title}</TableCell>
                <TableCell className="font-medium">
                  {task.description}
                </TableCell>
                <TableCell className="font-medium">{task.author}</TableCell>

                <TableCell>
                  <div>
                    {checkStatusTask ? (
                      <TasksCompleteIcon />
                    ) : (
                      <TasksPendingIcon />
                    )}
                  </div>
                </TableCell>

                <TableCell className="items-end text-right">
                  <div className="flex justify-end gap-2">
                    <Link to={`/edit/task/${task.id}`}>
                      <EditIcon />
                    </Link>
                    <button onClick={() => deleteTaskFromHook(task.id)}>
                      <DeleteIcon />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>
              <div className="flex gap-1 items-center justify-center">
                <TasksIcon /> All Tasks: {tasks.length}
              </div>
            </TableCell>
            <TableCell className="text-right">@gergg</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default TasksList;

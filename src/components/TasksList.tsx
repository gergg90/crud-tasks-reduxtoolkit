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

import { useAppSelector } from "@/hooks/useApp";
import { useTasksActions } from "@/hooks/useTasksActions";

function TasksList() {
  const tasks = useAppSelector((state) => state.tasks);
  const { deleteTaskFromHook } = useTasksActions();

  return (
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
        {tasks.map((task) => {
          const checkStatusTask = task.checked;

          return (
            <TableRow key={task.id}>
              <TableCell className="font-small">{task.id}</TableCell>
              <TableCell className="font-medium">{task.title}</TableCell>
              <TableCell className="font-medium">{task.description}</TableCell>
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
                  <button>
                    <EditIcon />
                  </button>
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
  );
}

export default TasksList;

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

import { TasksCompleteIcon, TasksIcon, TasksPendingIcon } from "./icons";

import { useAppSelector } from "@/hooks/useApp";

function TasksList() {
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <Table>
      <TableCaption>A list of your recent tasks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10px]">ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Actions</TableHead>
          <TableHead className="text-right">Checked</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => {
          const checkStatusTask = task.checked;

          return (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.id}</TableCell>
              <TableCell className="font-medium">{task.title}</TableCell>
              <TableCell className="font-medium">{task.description}</TableCell>
              <TableCell className="font-medium">{task.author}</TableCell>
              <TableCell className="font-medium">Actions</TableCell>

              <TableCell className="items-end text-right">
                <div className="flex justify-end">
                  {checkStatusTask ? (
                    <TasksCompleteIcon />
                  ) : (
                    <TasksPendingIcon />
                  )}
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

import { z } from "zod";

const tasksFormSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(4).max(20),
  description: z.string(),
  author: z.string(),
  checked: z.boolean(),
});

function TasksForm() {
  return <div>TasksForm</div>;
}

export default TasksForm;

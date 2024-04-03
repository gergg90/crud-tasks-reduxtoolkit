import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputShadcn } from "@/components/ui/input";
import { useAppSelector } from "@/hooks/useApp";
import { useTasksActions } from "@/hooks/useTasksActions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Switch } from "./ui/switch";
import { Textarea } from "./ui/textarea";

const tasksFormSchema = z.object({
  title: z.string().min(4).max(20),
  description: z
    .string()
    .min(10, {
      message: "Description must be at least 10 characters.",
    })
    .max(160, {
      message: "Description must not be longer than 30 characters.",
    }),
  author: z.string(),
  checked: z.boolean(),
});

function TasksForm() {
  const { createTaskFromHook } = useTasksActions();
  const [task, setTask] = useState({
    title: "",
    description: "",
    author: "",
    checked: false,
  });
  const tasks = useAppSelector((state) => state.tasks);
  const navigate = useNavigate();
  const params = useParams();

  const form = useForm<z.infer<typeof tasksFormSchema>>({
    resolver: zodResolver(tasksFormSchema),
    defaultValues: {
      title: task.title,
      description: task.description,
      author: task.author,
      checked: task.checked,
    },
  });

  const onSubmit = (values: z.infer<typeof tasksFormSchema>) => {
    const { title, description, author, checked } = values;

    createTaskFromHook({ title, description, author, checked });
    navigate("/tasks");
    form.reset();
  };

  useEffect(() => {
    if (params.id) {
      const foundTask = tasks.find((task) => task.id === params.id);

      if (foundTask) {
        setTask(foundTask);
        form.setValue("title", foundTask.title);
        form.setValue("description", foundTask.description);
        form.setValue("author", foundTask.author);
        form.setValue("checked", foundTask.checked);
      }
    }
  }, []);

  return (
    <div className="flex min-h-full flex-col justify-center p-6 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="py-6">
          <blockquote className="text-2xl font-semibold italic text-center">
            Create your
            <span className="mx-0.5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-rose-600 relative inline-block">
              <span className="relative text-slate-950">
                {" "}
                <div className="flex  px-2 gap-1"> task </div>{" "}
              </span>
            </span>
          </blockquote>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-1">Title:</FormLabel>
                  <FormControl>
                    <InputShadcn placeholder="...title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-1">Author:</FormLabel>
                  <FormControl>
                    <InputShadcn placeholder="...author" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-1">Description:</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="...description"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    You can <span>@mention</span> other users and organizations.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="checked"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Checked</FormLabel>
                    <FormDescription>...complete your task</FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default TasksForm;

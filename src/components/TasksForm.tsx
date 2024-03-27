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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Switch } from "./ui/switch";
import { Textarea } from "./ui/textarea";

const tasksFormSchema = z.object({
  // id: z.string().uuid(),
  title: z.string().min(4).max(20),
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
  author: z.string(),
  checked: z.boolean(),
});

function TasksForm() {
  const form = useForm<z.infer<typeof tasksFormSchema>>({
    resolver: zodResolver(tasksFormSchema),
    defaultValues: {
      checked: false,
    },
  });

  const onSubmit = (values: z.infer<typeof tasksFormSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-2xl font-semibold italic text-center mb-5">
          Create your task.
        </h1>
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
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-1">Bio:</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="...write a short description"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription
                    className="ml-1
                  "
                  >
                    Add and complete your tasks
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
                    <FormDescription></FormDescription>
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

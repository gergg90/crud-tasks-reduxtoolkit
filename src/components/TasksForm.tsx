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

const tasksFormSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(4).max(20),
  description: z.string(),
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <InputShadcn placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default TasksForm;

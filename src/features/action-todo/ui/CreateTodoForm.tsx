import { zodResolver } from '@hookform/resolvers/zod';
import { RiAddLine } from '@remixicon/react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { todoStore } from '~/entities/todo/model/todo.store';

import { Button } from '~/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/shared/ui/card';
import { Field, FieldError, FieldGroup, FieldLabel } from '~/shared/ui/field';
import { Input } from '~/shared/ui/input';

const createTodoSchema = z.object({
  name: z.string().min(1, 'Название обязательно'),
  description: z.string().optional(),
});

type CreateTodoFormValues = z.infer<typeof createTodoSchema>;

export const CreateTodoForm = () => {
  const { createTodo, loading } = todoStore();

  const form = useForm<CreateTodoFormValues>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const onSubmit = async (data: CreateTodoFormValues) => {
    const todo = await createTodo(data);

    if (todo) {
      form.reset();
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Новая задача</CardTitle>
        <CardDescription>Добавьте название и при необходимости описание</CardDescription>
      </CardHeader>

      <CardContent>
        <form id="create-todo-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="create-todo-name">Название</FieldLabel>
                  <Input
                    {...field}
                    id="create-todo-name"
                    placeholder="Купить телик"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="create-todo-description">Описание</FieldLabel>
                  <Input
                    {...field}
                    id="create-todo-description"
                    placeholder="Необязательно"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="justify-end">
        <Button
          type="submit"
          form="create-todo-form"
          disabled={loading.create || form.formState.isSubmitting}
        >
          <RiAddLine />
          Добавить
        </Button>
      </CardFooter>
    </Card>
  );
};

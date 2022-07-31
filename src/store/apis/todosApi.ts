import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Todo = {
    userId: number,
	id: number,
	title: string,
	completed: boolean
}

export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], string[]>({
            query: () => '/todos'
        }),

        getTodoById: builder.query<Todo[], number>({
            query: (todoId) =>`/todos/${ todoId }`
        }),
    })
});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
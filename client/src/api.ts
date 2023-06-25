import { Todo } from "./types";

export const createTodo = (data: string): Promise<Todo> =>
    fetch("http://localhost:3000/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: data,
            done: false,
        }),
    }).then((res) => res.json());

export const getTodos = (): Promise<Todo[]> => fetch("http://localhost:3000/items").then((res) => res.json());

export const updateTodo = (id: number, data: Omit<Partial<Todo>, "id">): Promise<Todo> =>
    fetch(`http://localhost:3000/items/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());

export const deleteTodo = async (id: number): Promise<void> => {
    await fetch(`http://localhost:3000/items/${id}`, {
        method: "DELETE",
    });
};

export const setTodoDone = (id: number): Promise<Todo> =>
    fetch(`http://localhost:3000/items/${id}/done`, {
        method: "PATCH",
    }).then((res) => res.json());

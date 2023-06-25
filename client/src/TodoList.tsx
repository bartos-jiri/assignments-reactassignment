import { useQuery } from "react-query";
import { List } from "./components/List";
import { getTodos } from "./api";
import { TodoListItem } from "./TodoListItem";

export const TodoList: React.FC = () => {
    const { data: todos, isLoading } = useQuery("todos", getTodos, {
        select: (todos) => {
            todos.sort(
                (a, b) =>
                    Number(a.done) - Number(b.done) || new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
            return todos;
        },
    });

    if (isLoading || !todos) {
        return null;
    }

    return (
        <List>
            {todos.map((todo) => (
                <TodoListItem key={todo.id} {...todo} />
            ))}
        </List>
    );
};

import { useQuery } from "react-query";
import { List } from "./components/List";
import { getTodos } from "./api";
import { TodoListItem } from "./TodoListItem";

export const TodoList: React.FC = () => {
    const { data: todos, isLoading } = useQuery("todos", getTodos);

    if (isLoading || !todos) {
        return null;
    }

    return (
        <List>
            {todos.map((todo) => (
                <TodoListItem {...todo} />
            ))}
        </List>
    );
};

import { useQuery } from "react-query";
import { List } from "./components/List";
import { getTodos } from "./api";
import { ListItem } from "./components/ListItem";

export const TodoList: React.FC = () => {
    const { data: todos, isLoading } = useQuery("todos", getTodos);

    if (isLoading || !todos) {
        return null;
    }

    return (
        <List>
            {todos.map((todo) => (
                <ListItem
                    label={todo.title}
                    handleEdit={() => {
                        console.log("edit todo");
                    }}
                    handleRemoval={() => {
                        console.log("delete todo");
                    }}
                />
            ))}
        </List>
    );
};

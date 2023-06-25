import { useMutation, useQueryClient } from "react-query";
import { updateTodo } from "./api";
import { ListItem } from "./components/ListItem";

type TodoListItemProps = {
    id: number;
    title: string;
    done: boolean;
};

export const TodoListItem: React.FC<TodoListItemProps> = ({ id, title, done }) => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation((title: string) => updateTodo(id, { title }), {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });

    return (
        <ListItem
            checked={done}
            label={title}
            handleEdit={(title: string) => {
                mutate(title);
            }}
            handleRemoval={() => {
                console.log("delete todo");
            }}
        />
    );
};

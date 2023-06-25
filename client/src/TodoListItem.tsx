import { useMutation, useQueryClient } from "react-query";
import { deleteTodo, updateTodo } from "./api";
import { ListItem } from "./components/ListItem";

type TodoListItemProps = {
    id: number;
    title: string;
    done: boolean;
};

export const TodoListItem: React.FC<TodoListItemProps> = ({ id, title, done }) => {
    const queryClient = useQueryClient();

    const { mutate: update } = useMutation((title: string) => updateTodo(id, { title }), {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });

    const { mutate: remove } = useMutation(() => deleteTodo(id), {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });

    return <ListItem checked={done} label={title} handleEdit={update} handleRemoval={remove} />;
};

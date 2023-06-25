import { useMutation, useQueryClient } from "react-query";
import { deleteTodo, updateTodo } from "./api";
import { ListItem } from "./components/ListItem";
import { Todo } from "./types";

type TodoListItemProps = {
    id: number;
    title: string;
    done: boolean;
};

export const TodoListItem: React.FC<TodoListItemProps> = ({ id, title, done }) => {
    const queryClient = useQueryClient();

    const { mutate: update } = useMutation(
        (data: Pick<Partial<Todo>, "title" | "done">) => updateTodo(id, { ...data }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("todos");
            },
        }
    );

    const { mutate: remove } = useMutation(() => deleteTodo(id), {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });

    return (
        <ListItem
            checked={done}
            label={title}
            handleEdit={(title) => update({ title })}
            handleRemoval={remove}
            onCheckedChange={(done) => {
                if (done !== "indeterminate") {
                    update({ done });
                }
            }}
        />
    );
};

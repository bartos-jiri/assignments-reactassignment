import { useMutation, useQueryClient } from "react-query";
import { deleteTodo, setTodoDone, updateTodo } from "./api";
import { ListItem } from "../components/ListItem";
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
            onSuccess: (data) => {
                queryClient.setQueriesData<Todo[]>("todos", (old) =>
                    (old || []).filter((t) => t.id !== data.id).concat(data)
                );
            },
        }
    );

    const { mutate: remove } = useMutation(() => deleteTodo(id), {
        onSuccess: () => {
            queryClient.setQueriesData<Todo[]>("todos", (old) => (old || []).filter((t) => t.id !== id));
        },
    });

    const { mutate: setDone } = useMutation(() => setTodoDone(id), {
        onSuccess: (data) => {
            queryClient.setQueriesData<Todo[]>("todos", (old) =>
                (old || []).filter((t) => t.id !== data.id).concat(data)
            );
        },
    });

    return (
        <ListItem
            checked={done}
            label={title}
            handleEdit={(title) => update({ title })}
            handleRemoval={remove}
            onCheckedChange={(done) => {
                if (done === true) {
                    setDone();
                }
                if (done === false) {
                    update({ done });
                }
            }}
        />
    );
};

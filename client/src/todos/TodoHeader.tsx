import { useMutation, useQueryClient } from "react-query";
import { Header } from "../components/Header";
import { createTodo } from "./api";
import { Todo } from "./types";

export const TodoHeader: React.FC = () => {
    const queryClient = useQueryClient();

    const { mutate: addTodo } = useMutation(createTodo, {
        onSuccess: (data) => {
            queryClient.setQueriesData<Todo[]>("todos", (old) => (old || []).concat(data));
        },
    });

    return <Header handleAddItem={addTodo}>To Do app</Header>;
};

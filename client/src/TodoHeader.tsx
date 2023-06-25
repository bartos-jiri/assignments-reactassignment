import { useMutation, useQueryClient } from "react-query";
import { Header } from "./components/Header";
import { createTodo } from "./api";

export const TodoHeader: React.FC = () => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation(createTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });

    return <Header handleAddItem={mutate}>To Do app</Header>;
};

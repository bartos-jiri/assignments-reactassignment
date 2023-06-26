import { useQuery } from "react-query";
import { Footer } from "../components/Footer";
import { getTodos } from "./api";

export const TodoFooter: React.FC = () => {
    const { data: counts } = useQuery("todos", getTodos, {
        select: (todos) => ({
            todo: todos.filter((t) => !t.done).length,
            done: todos.filter((t) => t.done).length,
        }),
    });

    return <Footer doneItems={counts?.done} todoItems={counts?.todo} />;
};

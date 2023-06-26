import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { TodoHeader } from "./todos/TodoHeader";
import { TodoList } from "./todos/TodoList";
import { TodoFooter } from "./todos/TodoFooter";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

export const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <Container>
                    <Layout>
                        <TodoHeader />
                        <TodoList />
                        <TodoFooter />
                    </Layout>
                </Container>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

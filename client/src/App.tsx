import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { TodoHeader } from "./TodoHeader";
import { TodoList } from "./TodoList";
import { TodoFooter } from "./TodoFooter";

const queryClient = new QueryClient();

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

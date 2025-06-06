import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import { StrictMode } from "react";
import Container from "./Container.jsx";
import TodoList from "../todolist/TodoList.jsx";


createRoot(document.getElementById("root"))
    .render(
        
        <StrictMode>

            <Container>
                <HelloWorld />
                <TodoList />
            </Container>

        </StrictMode>

    );
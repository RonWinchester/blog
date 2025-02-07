import React from "react";
import "app/styles/index.scss";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
import "shared/config/i18n/i18n";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";

const container = document.getElementById("root");
const root = container ? createRoot(container) : null;
root?.render(
    // React.StrictMode намеренно вызывает двойное рендеринг всех компонентов в режиме разработки
    // для выявления побочных эффектов и неподходящих паттернов использования.
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>,
);

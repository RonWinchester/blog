import React from "react";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
import "shared/config/i18n/i18n";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</React.StrictMode>
);

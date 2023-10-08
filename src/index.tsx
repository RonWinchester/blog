import React from "react";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./app/providers/ThemeProvider";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);

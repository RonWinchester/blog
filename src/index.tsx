import React from "react";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
import ThemeProvider from "./theme/ThemeProvider";
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

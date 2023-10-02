import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./App";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
    path: "about",
    element: <AboutPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
	  <RouterProvider router={router} />
	</React.StrictMode>
  );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.jsx";
import { router } from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

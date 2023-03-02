import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ExpenseProvider from "./components/context/expense-context";
import UserProvider from "./components/context/user-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExpenseProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ExpenseProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ExpenseProvider from "./components/context/expense-context";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./components/context/user-context";
import CategoryProvider from "./components/context/category-context";
import UserIdProvider from "./components/context/userId-context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ExpenseProvider>
        <UserProvider>
          <CategoryProvider>
            <UserIdProvider>
             <App />
            </UserIdProvider>
          </CategoryProvider>
        </UserProvider>
      </ExpenseProvider>
    </BrowserRouter>
  </React.StrictMode>
);

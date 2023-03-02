import { createContext, useState } from "react";
import { List } from "../services/expense.service";

export const expenseContext = createContext({});

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  function fetchExpenses()  {
    List().then((res) => {
      setExpenses(res)
    })
  }

  return (
    <expenseContext.Provider value={{ expenses, setExpenses, fetchExpenses }}>
      {children}
    </expenseContext.Provider>
  );
}

export default ExpenseProvider;